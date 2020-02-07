import React from "react";
import "./Service.css";
import { NavLink } from "react-router-dom";

class Service extends React.Component {
  // getUrl = event => {
  //   event.preventDefault();
  //   this.props.history.push(this.props.url);
  // };
  render() {
    return (
      <li>
        <NavLink to={this.props.url}>
          <img alt={this.props.label} src={this.props.icon} />
          {this.props.label}
        </NavLink>
      </li>
    );
  }
}

export default Service;
