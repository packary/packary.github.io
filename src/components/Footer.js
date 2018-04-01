import React from 'react';
import logo from '../svgs/logo-title-white.svg';
import Link from 'gatsby-link';
import './styles/footer.scss';
import logoMail from '../svgs/mail-white.svg';
import logoGitter from '../svgs/gitter-white.svg';
import logoTwitter from '../svgs/twitter-white.svg';

export const Footer = () => (
  <div className="footer">
    <div className="footer__inner">
      <div className="footer__links">
        <img className="footer__logo" src={logo} alt="packary.io logo"/>
        <ul className="footer__links__list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms of Service</Link></li>
        </ul>
      </div>
      <ul className="footer__contact__list">
        <li>
          <a href="mailto:support@packary.io">
            <img className="footer__social" src={logoMail} alt="email icon"/>
          </a>
        </li>
        <li>
          <a href="https://gitter.im/packary/Lobby">
            <img className="footer__social" src={logoGitter} alt="gitter chatroom icon"/>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/packary_io">
            <img className="footer__social" src={logoTwitter} alt="twitter social icon"/>
          </a>
        </li>
      </ul>
    </div>
  </div>
);