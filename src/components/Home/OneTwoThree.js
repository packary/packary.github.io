import React from 'react';
import SignUpForm from '../SignUpForm';
import './styles/one-two-three.scss';

const OneTwoThree = () => (
  <div className="container">
    <div className="one-two-three">

      <div className="one-two-three--block">
        <h1>As easy as 1, 2, 3.</h1>
        <ol className="one-two-three__list">
          <li className="one-two-three__list__item">
            <p>Choose your language and deploy a registry in
              one-click. Your first registry is free.</p>
          </li>
          <li className="one-two-three__list__item">
            <p>Use our simple docs to configure your package manager. Chunky config blocks are ready to
              copy-paste.</p>
          </li>
          <li className="one-two-three__list__item">
            <p>Our registries use the same APIs as their open source counterparts, so they'll work with
              all your tooling.</p>
          </li>
        </ol>
      </div>
      <div className="one-two-three--block">
        <div className="one-two-three--block--sign-me-up">
        <SignUpForm buttonModifier="light" align="right" />
        </div>
      </div>
    </div>
  </div>
);

export default OneTwoThree;