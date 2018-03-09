import React from 'react';
import './styles/further-details.scss';

const FurtherDetails = () => (
  <div className="container further-details">
    <div className="further-details__block">
      <h1>Where we're up to</h1>
      <p>We're on the verge of opening an invitation-based beta with support for Maven repositories, after that we're
        looking to involve the community on what to deliver next! The platform has been built with other languages in
        mind, so anything's possible!</p>
    </div>
    <div className="further-details__block">
      <p>A high-level road map includes (in no particular order)</p>
      <ul>
        <li>Maven snapshots</li>
        <li>NPM support</li>
        <li>Python support</li>
      </ul>
    </div>
  </div>
);

export default FurtherDetails;