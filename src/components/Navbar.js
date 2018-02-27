import React from 'react';
import './styles/navbar.scss';
import logoTitle from '../logo-title.svg';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar__title"><img className="navbar__logo" src={logoTitle} /></div>
    <div className="navbar__links">
      <li>
        <ul className="navbar__links__item">About Us</ul>
        <ul className="navbar__links__item">Contact Us</ul>
      </li>
    </div>
  </nav>
);

export default Navbar;