import React, { Component } from "react";
import "../auth/regis.css";

class Regis extends Component {
	render() {
		return (
			<div className="container regis_form">
				<h1>
					<strong>
						<hr></hr>Register
						Form <hr></hr>
					</strong>
				</h1>
				<div className="col1">
					<input
						type="text"
						name="txt_Firstname"
						required
						placeholder="Enter Firstname"
					></input>
				</div>
				<div className="col2">
					<input
						type="text"
						name="txt_Lastname"
						required
						placeholder="Enter Lastname"
					></input>

					<input
						type="email"
						name="txt_email"
						required
						placeholder="Enter Email"
					></input>

					<input
						type="email"
						name="txt_email"
						className="form-control"
						required
						placeholder="Enter Email"
					></input>

					<input
						type="email"
						name="txt_email"
						className="form-control"
						required
						placeholder="Enter Email"
					></input>
				</div>
			</div>
		);
	}
}
export default Regis;
