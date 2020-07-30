import React, { Component } from "react";
import "../auth/regis.css";
import "antd/dist/antd.css";
import {
	UserOutlined,
	MailOutlined,
	PhoneOutlined,
	SearchOutlined,
	SlackOutlined,
} from "@ant-design/icons";
import { Row, Col, DatePicker } from "antd";


class Regis extends Component {
	render() {
		
		return (
			
			<div className="container">
				<div className="card">
					<h1
						className="card-title"
						style={{
							fontSize:
								"2.5em",
						}}
					>
						<strong>
							Create
							Account
						</strong>
					</h1>
					<p className="card-title">
						Get started with
						your free account
					</p>
					<form>
						<Row
							gutter={[
								32,
								0,
							]}
						>
							<Col xs={24} sm={16} xl={12}
								span={
									12
								}
							>
								<div className="input-container ">
									<div className="fa">
										<div className="icon">
											<UserOutlined
												style={{
													fontSize:
														"20px	",
													color:
														"white",
												}}
											/>
										</div>
									</div>

									<input
										className="input-field"
										type="text"
										placeholder="Firstname"
									></input>
								</div>
							</Col>
							<Col
								span={
									12
								}
							>
								<div className="input-container">
									<div className="fa">
										<div className="icon">
											<UserOutlined
												style={{
													fontSize:
														"20px",
													color:
														"white",
												}}
											/>
										</div>
									</div>
									<input
										className="input-field"
										type="text"
										placeholder="Lastname"
									></input>
								</div>
							</Col>
						</Row>
						<div className="input-container">
							<div className="fa">
								<div className="icon">
									<UserOutlined
										style={{
											fontSize:
												"20px",
											color:
												"white",
										}}
									/>
								</div>
							</div>
							<input
								className="input-field"
								type="text"
								placeholder="Username"
							></input>
						</div>
						<div className="input-container">
							<div className="fa">
								<div className="icon">
									<SlackOutlined
										style={{
											fontSize:
												"20px",
											color:
												"white",
										}}
									/>
								</div>
							</div>
							<input
								className="input-field"
								type="password"
								placeholder="password"
							></input>
						</div>
						<div className="input-container">
							<div className="fa">
								<div className="icon">
									<MailOutlined
										style={{
											fontSize:
												"20px",
											color:
												"white",
										}}
									/>
								</div>
							</div>
							<input
								className="input-field"
								type="text"
								placeholder="Email"
							></input>
						</div>
						<div className="input-container">
							<div className="fa">
								<div className="icon">
									<PhoneOutlined
										style={{
											fontSize:
												"20px",
											color:
												"white",
										}}
									/>
								</div>
							</div>
							<input
								className="input-field"
								type="text"
								placeholder="Phone number"
							></input>
						</div>
						<Row>
							<Col
								span={
									12
								}
							>
								<div className="input-container ">
									<div className="input-field">
										<h4 className="birthdate">
											BirthDate
											<DatePicker />
										</h4>
									</div>
								</div>
							</Col>
							<Col
								span={
									12
								}
							>
								<div className="input-container">
									<div className="fa">
										<div className="icon-age">
											<SearchOutlined
												style={{
													fontSize:
														"20px",
													color:
														"white",
												}}
											/>
										</div>
									</div>

									<input
										className="input-age"
										type="text"
										placeholder="Age"
									></input>
								</div>
							</Col>
						</Row>
							<input
								className="input-field-form"
								type="form"
								placeholder="About you"
							></input>
					

						<button
							type="submit"
							className="btn-regis"
						>
							Register
						</button>
						<p className="card-title">
							{" "}
							Have an
							account ?{" "}
							<a href="Login">
								Log
								in
							</a>
						</p>
					</form>
				</div>
			</div>
		);
	}
}
export default Regis;
