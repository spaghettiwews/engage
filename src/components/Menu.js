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
            <NavLink to={link.url}>{link.label}</NavLink>
          </li>
        ))}
      </nav>
    );
  }
}

export default Menu;
