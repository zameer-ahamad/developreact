import React, { Component } from "react";

class SignIn extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <React.Fragment>
        <h3>Already have an account ? SignIn here</h3>
        <form>
          <label>Email :</label>
          <input
            name="email"
            value={this.state.email}
            type="email"
            onChange={this.handleOnChange}
          ></input>
          <br></br>
          <label>password :</label>
          <input
            name="password"
            value={this.state.password}
            type="password"
            onChange={this.handleOnChange}
          ></input>
          <br></br>
          <button>SignIn</button>
        </form>
      </React.Fragment>
    );
  }
}
export default SignIn;
