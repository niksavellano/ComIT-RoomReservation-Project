import React, { Component } from "react";

import firebase from "firebase";
import "./css/login.css";
import MyLink from "./MyLink";

class NavBar extends Component {
  state = {
    menuItems: [
      { key: 1, title: "Newsfeed", to: "/", exact: true },
      { key: 2, title: "Facility", to: "/facility", exact: false },
      { key: 3, title: "Reservation", to: "/reservation", exact: false },
      {
        key: 4,
        title: "Sign out",
        to: "/",
        exact: false,
        onClick: () => {
          firebase.auth().signOut();
          alert("Signed out!");
        }
      }
    ]
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <br />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {this.state.menuItems.map(menuItem => (
                <MyLink
                  key={menuItem.key}
                  text={menuItem.title}
                  to={menuItem.to}
                  exact={menuItem.exact}
                  onClick={menuItem.onClick}
                />
              ))}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
