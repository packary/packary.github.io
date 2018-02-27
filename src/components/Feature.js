import React from 'react'

const Feature = ({ title, icon, children }) => (
  <div>
    <div className="icon">
      <i className={`icon-${icon}`}/>
    </div>
    <h4>{title}</h4>
    {children}
  </div>
);

export default Feature;
