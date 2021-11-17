import React, { Component } from "react";
import firebase from "firebase";

class SignUp extends Component {
  state = {};

  signUp = () => {
    let database = firebase.database().ref();
    let rootRef = database.child("Users");

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let newPassword = document.getElementById("newPassword").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    if (email === 0) {
      alert("Email Address field is required");
    } else if (password === 0) {
      alert("Password field is required");
    } else if (password !== newPassword) {
      alert("Password not Match");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(u => {
          var user = firebase.auth().currentUser;
          user.updateProfile({
            displayName: `${firstName} ${lastName}`
          });
          return rootRef.child(u.user.uid).set({
            email: email,
            firstName: firstName,
            lastName: lastName
          });
        })
        .catch(err => {
          console.log("error: " + err.toString());
        });
    }
  };
  render() {
    return (
      <div className="jumbotron">
        <h1>Sign Up</h1>
        <div className="form-group1">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            className="form-control"
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            className="form-control"
          />
        </div>
        <div className="form-group2">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="form-control"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="form-control"
          />
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            placeholder="New Password"
            className="form-control"
          />
        </div>
        <button className="btn" onClick={this.signUp}>
          Submit
        </button>
      </div>
    );
  }
}

export default SignUp;
