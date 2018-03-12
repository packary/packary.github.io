import React from 'react';
import './styles/be-in-control.scss';
import oneIcon from '../../svgs/one.svg';
import twoIcon from '../../svgs/two.svg';
import threeIcon from '../../svgs/three.svg';

const SuperSimple = () => (
  <div className="container in-control">
    <div className="in-control__info">
      <div className="in-control__info__item">
        <img className="in-control__info__item__icon" src={oneIcon} />
        <p>Choose your language and deploy a registry in
          one-click. Your first registry is free.</p>
      </div>
      <div className="in-control__info__item">
        <img className="in-control__info__item__icon" src={twoIcon} />
        <p>Use our simple docs to configure your package manager. Chunky config blocks are ready to
          copy-paste.</p>
      </div>
      <div className="in-control__info__item">
        <img className="in-control__info__item__icon" src={threeIcon} />
        <p>Our registries use the same APIs as their open source counterparts, so they'll work with
          all your tooling.</p>
      </div>
    </div>
  </div>
);

export default SuperSimple;