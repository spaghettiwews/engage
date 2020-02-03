import React from 'react';
import siteConfig from '../siteConfig';
import './Footer.css';

export default function Footer() {
    return (
        <footer>{siteConfig.copyright}. {siteConfig.title}</footer>
    )
}