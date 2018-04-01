import React from 'react';
import T from 'prop-types';
import './styles/pricing.scss';

// const PriceTier = ({title, features}) => (
//   <div className="pricing__tier">
//     <h2>{title}</h2>
//     <ul className="pricing__tier__features">
//       {features && features.map(feature => (
//         <li key={feature}>{feature}</li>
//       ))}
//     </ul>
//   </div>
// );

// PriceTier.propTypes = {
//   title: T.string.isRequired,
//   features: T.arrayOf(T.string).isRequired,
// };


const Pricing = () => (
  <div className="pricing">
    <div className="pricing__info">
      <h1 className="pricing__info__heading">Pricing</h1>
      <p className="pricing__info__notes">We're still crunching numbers so aren't able to publish a pricing plan just
        quite yet.</p>
      <p className="pricing__info__notes">Our initial strategy is aiming towards a fixed monthly/annual fee with
        usage-based tiers, with a free tier thrown in for those that wish to experiment with the service:</p>
    </div>
    {/*<div className="pricing__tiers">*/}
      {/*<PriceTier title="Free*" features={['0.5GB Artifact Storage', '5GB Bandwidth']}/>*/}
      {/*<PriceTier title="Small Business"/>*/}
      {/*<PriceTier title="Enterprise"/>*/}
    {/*</div>*/}
  </div>
);

export default Pricing;