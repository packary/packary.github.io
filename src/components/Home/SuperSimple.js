import React from 'react';
import './styles/super-simple.scss';
import cogIcon from '../../svgs/cog-outline-grad.svg';
import codeIcon from '../../svgs/code-gradient.svg';
import teamIcon from '../../svgs/team-grad.svg';

const SuperSimple = () => (
  <div className="container in-control">
    {/*<h1 className="center">Super simple hosting for your private packages</h1>*/}
    <div className="in-control__summary">
      <p>Do you need to host some private libraries for your organisation or clients?</p>
      <p>Do you find current SaaS solutions are aimed at large enterprises and can be costly for smaller
        businesses?</p>
      <p>Do you have the time to setup and maintain privately-hosted repositories?</p>
    </div>
    <div className="in-control__box">
      <h1 className="center in-control__box__header">Enter, Packary</h1>
      <div className="in-control__info">
        <div className="in-control__info__item">
          <img className="in-control__info__item__icon" src={cogIcon}/>
          <h3>Simple</h3>
          <p>Create a repository in a few clicks, configure your package manager, and push your code. No hosting,
            proxy'ing and minimal configuration.</p>
        </div>
        <div className="in-control__info__item">
          <img className="in-control__info__item__icon" src={codeIcon}/>
          <h3>Multiple Languages</h3>
          <p>Initial support for Maven - NPM, Python plus other languages driven by community needs are planned</p>
        </div>
        <div className="in-control__info__item">
          <img className="in-control__info__item__icon" src={teamIcon}/>
          <h3>Made for teams</h3>
          <p>Each developer gets their own account, and you control who can publish what.</p>
        </div>
      </div>
    </div>
  </div>
);

export default SuperSimple;