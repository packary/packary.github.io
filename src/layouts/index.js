import React from 'react'
import T from 'prop-types'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar';

import favicon from '../favicon.png';
import './index.scss'
import './fontello.css'

// Ensure this library is added to our bundle - we instantiate it in gatsby-browser.js
import 'gitter-sidecar';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Packary | Beta Invitation"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        { rel: 'icon', href: favicon },
      ]}
    />
    <Navbar />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: T.func,
};

export default TemplateWrapper
