import React from 'react';
import siteConfig from '../siteConfig';
import Menu from '../components/Menu';
import './Header.css';
import logo from '../images/logo.svg';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="brand">
                    <a id="logo" href="/"><img alt={`${siteConfig.title} Logo`} src={logo} /></a>
                    <span id="tagline">{siteConfig.tagline}</span>
                </div>
                <Menu />
            </header>
        )
    }
}

export default Header;