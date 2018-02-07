import React from 'react';

const Feature = ({ title, icon, children }) => (
    <div>
        <div>{icon}</div>
        <h4>{title}</h4>
        <p>{children}</p>
    </div>
);

export default Feature;