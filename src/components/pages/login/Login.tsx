import React from "react";
import { Row, Col, Typography, Form, Input, Button, Checkbox, Avatar } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./login.css";

const { Title } = Typography;
// import { Empty } from "antd";

export default () => {
    // const layout = {
    //     labelCol: { span: 8 },
    //     wrapperCol: { span: 16 },
    // };
    // const tailLayout = {
    //     wrapperCol: { offset: 8, span: 16 },
    // };

    const onFinish = (values: any) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <>
            <Row style={{ height: "100vh" }} justify="space-around" align="middle">
                <Col className="half-blackground" xs={0} sm={0} md={14} lg={14} xl={14} span={14} ></Col>
                <Col className="shadow-login" xs={24} sm={24} md={10} lg={10} xl={10} span={10}>

                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        size={'large'}
                    >
                        <div className='center'>
                            <Avatar style={{ backgroundColor: 'rgb(220, 0, 78)' }} size={50} icon={<UserOutlined />} />
                        </div>
                        <div className='center'>
                            <Title level={4}>Login</Title>
                        </div>
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                Forgot password
        </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
        </Button>
        Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    );
};
