import React from 'react';
import Link from 'gatsby-link';
import './styles/navbar.scss';
import logoTitle from '../svgs/logo-title.svg';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar__title">
      <Link to="/">
        <img className="navbar__logo" src={logoTitle} />
      </Link>
    </div>
    {/*<div className="navbar__links">*/}
      {/*<li>*/}
        {/*<Link to="/about-us"><ul className="navbar__links__item">About Us</ul></Link>*/}
        {/*<ul className="navbar__links__item">Contact Us</ul>*/}
      {/*</li>*/}
    {/*</div>*/}
  </nav>
);

export default Navbar;