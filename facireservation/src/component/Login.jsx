import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import "popper.js";

import "./css/login.css";
import SignUp from "./SignUpForm";

import firebase from "firebase";
import { firebaseConfig } from "./Config";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Heading from "./Heading";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Route, Switch } from "react-router-dom";

import Newsfeed from "./Newsfeed";
import Facility from "./Facility";
import Reservation from "./Reservation";
import About from "./About";
import NavBar from "./Navigation";

firebase.initializeApp(firebaseConfig);

class Login extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
    });
  };
  render() {
    return (
      <div>
        {this.state.isSignedIn ? (
          <span>
            <h1 className="display-4 reserveHead">
              Re<span id="serve">serve</span>
            </h1>
            <NavBar />
            <ToastContainer />
            <Switch>
              <Route exact path="/" component={Newsfeed} />
              <Route path="/facility" component={Facility} />
              <Route path="/reservation" component={Reservation} />
              <Route path="/about" component={About} />
            </Switch>
          </span>
        ) : (
          <span>
            <Heading />
            <div className="container">
              <SignUp />
              <StyledFirebaseAuth
                className="jumbotron"
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </div>
          </span>
        )}
      </div>
    );
  }
}

export default Login;
