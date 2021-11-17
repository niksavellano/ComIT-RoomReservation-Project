import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Link extends Component {
  state = {};
  render() {
    const { text, to, exact, onClick } = this.props;
    return (
      <li className="nav-item">
        <NavLink className="nav-link" exact={exact} to={to} onClick={onClick}>
          {text}
        </NavLink>
      </li>
    );
  }
}

export default Link;
