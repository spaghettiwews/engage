import React from "react";
import siteConfig from "../siteConfig";
import "./Menu.css";
import { NavLink } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <nav>
        {siteConfig.navLinks.map((link, index) => (
          <li key={index}>
            <NavLink to={link.url}>
              <span>{link.label}</span>
              <img src={link.icon} alt={link.label} />
            </NavLink>
          </li>
        ))}
      </nav>
    );
  }
}

export default Menu;
