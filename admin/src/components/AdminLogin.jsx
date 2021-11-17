import React, { Component } from "react";
import firebase from "firebase";
import "./adminLogin.css";

class AdminLogin extends Component {
  state = {};

  login = () => {
    let userEmail = document.getElementById("email").value;
    let userPass = document.getElementById("password").value;
    firebase
      .auth()
      .signInWithEmailAndPassword(userEmail, userPass)
      .catch(error => {
        let errorMessage = error.message;
        window.alert("Error: " + errorMessage);
      });

    console.log(userEmail, userPass);
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="jumbotron">
            <h1>ADMIN</h1>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email Address"
              className="form-control"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="form-control"
            />
            <button className="btn btn-success" onClick={this.login}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminLogin;
