import React, { Component } from "react";
import "../auth/Login.css";



class formlogin extends Component {
	render() {
	
		return (
			<div className="container formlogin">
				<h1 className="Login">Login Page</h1>

				<form
				
					action="/Home" method="post" className="formcontrol"
				>
					<label
						id="currentUser" htmlFor="Username" className="col-sm-3"
					>	Username
					</label>
					<div className="col-sm-12">
						<input type="text" className="form-control" required placeholder="Enter username"></input>
						<hr></hr>
					</div>
					<label
						htmlFor="password" className="col-sm-3 control-label"
					> Password
					</label>
					<div className="col-sm-12">
						<input
							type="password" className="form-control" required placeholder="Enter password"></input>
						<hr></hr>
					</div>
					<div className="form-group">
						<div className="btn">
							<button
								type="submit"
							> Login
							</button>
						</div>
					</div>
					<div className="form-group">
						<strong>
							You don't have a account register here?
						</strong>
						<p>
							<a href="register"> Register Account
							</a>
						</p>
					</div>
				</form>
			</div>
		);
	}
}
export default formlogin;
