import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {
    Form,
    Input,
    Upload,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    Typography,
    Avatar,
    DatePicker,
    message,
    Modal
} from 'antd';
import { MailOutlined, UserOutlined, LockOutlined, UploadOutlined } from '@ant-design/icons';
import './register.css'
import { AuthService } from '../../../services/auth.service';
import { warningModal, renderBase64, successModal } from '../../้helpers'
import moment from "moment"

const { Title } = Typography;


const { Option } = Select;




const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        }
    }
};

const service = new AuthService()

export default () => {
    const history = useHistory()
    const [form] = Form.useForm();
    // const fileStruct = {
    //     selectedFile: null,
    //     selectedFileList: []
    // };
    let filelistStruct: any[] = []
    const [fileList, setFileList] = useState({
        selectedFile: null,
        selectedFileList: filelistStruct
    })

    const handleRemove = () => {
        setFileList({
            selectedFile: null,
            selectedFileList: filelistStruct
        })
    }

    const dummyRequest = ({ file, onSuccess }: { file: any, onSuccess: any }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    };


    const onFinish = async (values: any) => {
        try {
            if (fileList.selectedFileList.length) {
                let file = fileList.selectedFileList[0].originFileObj;
                let base64file: any = await renderBase64(file);
                values.avatar = base64file
            }
            values.birthday = moment(values.birthday).format("YYYY-MM-DD")
            let { data } = await service.registerService(values)
            if (data.code === 200) {
                Modal.success({
                    content: 'Success !!',
                    onOk() { history.push('/Login') },
                });
            }
        } catch (error) {
            warningModal({ title: 'This is a warning message', content: error.response.data.message })
        }

    };

    function beforeUpload(file: any) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    const handleChange = (info: any) => {
        const nextState: any = {};
        switch (info.file.status) {
            case "uploading":
                nextState.selectedFileList = [info.file];
                break;
            case "done":
                nextState.selectedFile = info.file;
                nextState.selectedFileList = [info.file];
                break;

            default:
                // error or removed
                nextState.selectedFile = null;
                nextState.selectedFileList = [];
        }
        setFileList(nextState)
    };


    return (
        <Row justify="space-around" align="middle">
            <Col xs={20} sm={14} lg={9} xl={8} span={24}>
                <Form
                    size="large"
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    initialValues={{
                        residence: ['zhejiang', 'hangzhou', 'xihu'],
                        prefix: '86',
                    }}
                    scrollToFirstError
                >
                    <div className="center" style={{ padding: '5px' }}>
                        <Avatar style={{ backgroundColor: "rgb(220, 0, 78)" }} size={50} icon={<LockOutlined />} />
                    </div>
                    <div className="center" style={{ padding: '5px' }}>
                        <Title level={4}>Register</Title>
                    </div>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="E-mail example : tibet_17931@hotmail.com" />
                    </Form.Item>

                    <Form.Item
                        name="username"
                        rules={[
                            { required: true, message: "Please input your Username!" },
                            { required: true, min: 8 },
                            { required: true, max: 50 }
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Username"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password placeholder="Password" />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('The two passwords that you entered do not match!');
                                }
                            }),
                        ]}
                    >
                        <Input.Password placeholder="Confirm Password" />
                    </Form.Item>

                    <Form.Item style={{ marginBottom: 0 }} >
                        <Form.Item
                            name="firstname"
                            style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                            <Input placeholder="FirstName" />
                        </Form.Item>
                        <span style={{ display: 'inline-block', width: '24px', lineHeight: '32px', textAlign: 'center' }} >
                            -
                        </span>
                        <Form.Item
                            name="lastname"
                            style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                            <Input placeholder="LastName" />
                        </Form.Item>
                    </Form.Item>


                    <Form.Item
                        style={{ marginBottom: 0 }}
                    >
                        <Form.Item
                            name="birthday"
                            style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
                        >

                            <DatePicker style={{ width: '100%' }} placeholder="BirthDay" format="DD-MM-YYYY" />

                        </Form.Item>
                        <span style={{ display: 'inline-block', width: '24px', lineHeight: '32px', textAlign: 'center' }} >

                        </span>
                        <Form.Item
                            name="phone"
                            rules={[{ required: true, message: 'Please input your phone number!' }]}
                            style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
                        >
                            <Input placeholder="Phone Number" />

                        </Form.Item>
                    </Form.Item>


                    <Form.Item
                    // name="avatar"
                    // valuePropName="fileList"
                    // getValueFromEvent={normFile}
                    >
                        <Upload
                            multiple={false}
                            // name="avatar"
                            onChange={handleChange}
                            beforeUpload={beforeUpload}
                            // fileList={fileList.selectedFileList}
                            onRemove={handleRemove}
                            customRequest={dummyRequest}
                            listType="picture"
                        >
                            <Button>
                                <UploadOutlined /> Click to upload Avatar
                             </Button>
                        </Upload>
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            { validator: (_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
                        ]}
                        {...tailFormItemLayout}
                    >
                        <Checkbox>
                            I have read the <a href="">agreement</a>
                        </Checkbox>
                    </Form.Item>


                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Register
        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>

    );
};