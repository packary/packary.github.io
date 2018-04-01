import React from 'react';
import SignUpForm from '../SignUpForm';
import demoGif from '../../demo.gif'
import './styles/hero.scss';

const Hero = () => (
  <div className="hero">
    <div className="hero__inner">
      <div className="hero__title">
        <h1 className="hero__title--big">packary</h1>
        <h3 className="hero__title--sub">Secure code repositories for your private libraries.</h3>
        <SignUpForm />
      </div>
      <div className="hero__demo">
        <img src={demoGif}/>
      </div>
    </div>
  </div>
);

export default Hero;