import React from "react";
import { Row, Col, Typography, Form, Input, Button, Checkbox, Avatar, } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { AuthService } from '../../../services/auth.service';
import { warningModal } from '../../้helpers'
import { useHistory, Link } from "react-router-dom";
// import { Link, useLocation, useHistory } from "react-router-dom";
import "./login.css";

const service = new AuthService()
const { Title } = Typography;
// import { Empty } from "antd";

export default () => {
    const history = useHistory();
    console.log(process.env)
    const onFinish = async (values: any) => {
        try {
            let { data } = await service.loginService(values)
            if (data.code === 200) {
                localStorage.setItem('token', data.message.token)
                delete data.message.token
                localStorage.setItem('profile', JSON.stringify(data.message))
                history.push('/Admin/Dashboard')
            }
        } catch (error) {
            warningModal({ title: 'This is a warning message', content: error.response.data.message })
            console.log(error.response.data.message)
        }

    };



    return (
        <>
            <Row style={{ height: "100vh" }} justify="space-around" align="middle">
                <Col className="half-blackground" xs={0} sm={0} md={14} lg={14} xl={14} span={14} ></Col>
                <Col className="shadow-login" xs={24} sm={24} md={10} lg={10} xl={10} span={10} >
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        size={"large"}
                    >
                        <div className="center">
                            <Avatar style={{ backgroundColor: "rgb(220, 0, 78)" }} size={50} icon={<UserOutlined />} />
                        </div>
                        <div className="center">
                            <Title level={4}>Login</Title>
                        </div>
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
                                { required: true, message: "Please input your Password!" },
                                { required: true, min: 8 },
                                { required: true, max: 15 }
                            ]}
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
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                            >
                                Log in
                            </Button>
                                Or &nbsp;
                                <Link to="/Register">register now!</Link>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    );
};
