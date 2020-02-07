import React from "react";
import siteConfig from "../siteConfig";
import Menu from "../components/Menu";
import "./Header.css";
import logo from "../images/engage-logo-2017.png";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="brand">
          <Link id="logo" to="/">
            <img alt={`${siteConfig.title} Logo`} src={logo} />
            <span id="tagline">{siteConfig.tagline}</span>
          </Link>
        </div>
        <Menu />
      </header>
    );
  }
}

export default Header;
