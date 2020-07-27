import React, { Component } from "react";
import "../auth/regis.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Regis extends Component {
	render() {
		return (
			<div className="container">
				<div className="card bg-light">
					<h1 className="card-title mt-3 text-center">
						Create Account
					</h1>
					<p className="text-center">
						Get started with
						your free account
					</p>
					<form>
						<div className="form-group input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<div>
										<FontAwesomeIcon
											icon={
												faUser
											}
										/>
									</div>
								</span>
							</div>
							<input
								className="form-control"
								placeholder="Full name"
								type="text"
							></input>
						</div>
						<div className="form-group input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<div>
										<FontAwesomeIcon
											icon={
												faUser
											}
										/>
									</div>
								</span>
							</div>
							<input
								className="form-control"
								placeholder="Email address"
								type="email"
							></input>
						</div>
						<div className="form-group input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<div>
										<FontAwesomeIcon
											icon={
												faEnvelope
											}
										/>
									</div>
								</span>
							</div>
							<input
								className="form-control"
								placeholder="Phone number"
								type="text"
							></input>
						</div>
						<div className="form-group input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fa fa-building"></i>
								</span>
							</div>
						</div>
						<div className="form-group input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fa fa-lock"></i>
								</span>
							</div>
							<input
								className="form-control"
								placeholder="Create password"
								type="password"
							></input>
						</div>
						<div className="form-group input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fa fa-lock"></i>
								</span>
							</div>
							<input
								className="form-control"
								placeholder="Confirm password"
								type="password"
							></input>
						</div>
						<div className="form-group">
							<button
								type="submit"
								className="btn btn-primary btn-block"
							>
								Create
								Account
							</button>
						</div>
						<p className="text-center">
							Have an
							account?
							<a href="Login">
								Log
								In
							</a>
						</p>
					</form>
				</div>
			</div>
		);
	}
}
export default Regis;
