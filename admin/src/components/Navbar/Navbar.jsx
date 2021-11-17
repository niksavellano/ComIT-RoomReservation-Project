import React, { Component } from "react";
import firebase from "firebase";

import MyLink from "./MyLink";

import "./navbar.css";

class NavBar extends Component {
  state = {
    menuItems: [
      { key: 1, title: "Reservation", to: "/", exact: true },
      { key: 2, title: "List", to: "/list", exact: false },
      {
        key: 3,
        title: "Sign Out",
        to: "/signout",
        exact: false,
        onClick: () => {
          firebase.auth().signOut();
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
              <h2 className="display-6">
                Re<span id="serve">serve</span>
              </h2>
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
