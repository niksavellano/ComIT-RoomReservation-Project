import React, { Component } from "react";

import { firebaseConfig } from "./Config";
import firebase from "firebase";

import { Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import "popper.js";
import AdminLogin from "./AdminLogin";

import Lists from "./List/List";
import Reservation from "./Reservation/Reservation";
import NavBar from "./Navbar/Navbar";

firebase.initializeApp(firebaseConfig);

class Login extends Component {
  state = { isSignedIn: false };

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
            <NavBar />
            <Switch>
              <Route exact path="/" component={Reservation} />
              <Route path="/list" component={Lists} />
            </Switch>
          </span>
        ) : (
          <span>
            <AdminLogin />
          </span>
        )}
      </div>
    );
  }
}

export default Login;
