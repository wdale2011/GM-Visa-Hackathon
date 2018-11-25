import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div>
        <h3>Registration</h3>
        <label for="firstName">First Name</label>{" "}
        <input name="firstName" type="text" />
        <br />
        <label for="lastName">Last Name</label>{" "}
        <input name="lastName" type="text" />
        <br />
        <label for="email">Email</label> <input name="email" type="email" />
        <br />
        <label for="password">Password</label>{" "}
        <input name="password" type="password" />
        <br />
        <label for="confirmPassword">Confirm Password</label>{" "}
        <input name="confirmPassword" type="password" />
        <br />
        <label for="creditCard">Payment Information</label>{" "}
        <input name="creditCard" type="text" />
        <br />
        <button onClick={this.props.register}>Submit</button>
      </div>
    );
  }
}

export default Register;
