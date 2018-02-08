import React from 'react'
import T from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'
import './fontello.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: T.func,
}

export default TemplateWrapper
