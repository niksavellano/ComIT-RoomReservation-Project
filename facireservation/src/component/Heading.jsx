import React, { Component } from "react";
import firebase from "firebase";

class Heading extends Component {
  state = {};
  login = () => {
    let userEmail = document.getElementById("emailLogin").value;
    let userPass = document.getElementById("passwordLogin").value;
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
      <div className="heading">
        <h1 className="display-4">
          Re<span id="serve">serve</span>
        </h1>
        <div className="heading2">
          <input
            type="email"
            name="emailLogin"
            id="emailLogin"
            placeholder="Email Address"
            className="form-control"
          />
          <input
            type="password"
            name="passwordLogin"
            id="passwordLogin"
            placeholder="Password"
            className="form-control"
          />
          <button className="btn" id="btnLogin" onClick={this.login}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Heading;
