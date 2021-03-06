import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";

class Service extends React.Component {
  render() {
    return (
      <li className="service">
        <Link
          to={{
            pathname: `/b${this.props.url}`,
            state: {
              appliance: "Device"
            }
          }}
        >
          <img alt={this.props.label} src={this.props.icon} />
          {this.props.label}
        </Link>
      </li>
    );
  }
}

export default Service;
