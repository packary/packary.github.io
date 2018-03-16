import React from 'react';
import './styles/about-us.scss';

/**
 * NOTE: THIS ISN'T USED, BUT HAVEN'T DELETED IN CASE WE WANT IT
 * @returns {*}
 * @constructor
 */
const AboutUs = () => (
  <div className="about-us">
    <div className="about-us__member">
      <img src="http://via.placeholder.com/128x128" />
      <p className="about-us__member__name">Dan</p>
    </div>
    <div className="about-us__member">
      <img src="http://via.placeholder.com/128x128" />
      <p className="about-us__member__name">Mike</p>
    </div>
  </div>
);

export default AboutUs;
