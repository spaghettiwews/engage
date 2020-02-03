import React from 'react';
import siteConfig from '../siteConfig';
import './Menu.css';

class Menu extends React.Component {
    render() {
        return (
            <nav>
                {siteConfig.navLinks.map((link, index) => <li key={index}><a href={link.url}>{link.label}</a></li>)}
            </nav>
        )
    }
}

export default Menu;