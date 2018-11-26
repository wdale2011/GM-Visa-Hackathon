import React from "react";

class CarLogin extends React.Component {
  render() {
    return (
      <form>
        <div className="form-label-group">
          <input type="email" name="inputEmail" placeholder="Email" />
          <label for="inputEmail">Email address</label>
        </div>

        <div className="form-label-group">
          <input
            name="inputPassword"
            type="password"
            className="form-control"
            placeholder="Password"
            required
          />
          <label for="inputPassword">Password</label>
        </div>

        <button className="btn btn-lg btn-primary btn-block" type="button">
          Sign in
        </button>
      </form>
    );
  }
}

export default CarLogin;
