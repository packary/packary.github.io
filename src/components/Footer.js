import React from 'react';
import logo from '../svgs/logo-title-white.svg';
import './styles/footer.scss';

export const Footer = () => (
<div className="footer">
  <img className="footer__logo" src={logo} alt="packary.io logo"/>
  <ul className="footer__list">
    <li>About Us</li>
    <li>Contact Us</li>
  </ul>
</div>
);