import React from 'react';
import InfoCheckout from '../components/info-checkout/infoCheckout'
// import ServicesCheckout from '../services/servicesCheckout'
import './checkout.scss'

export default () => {
  return (
    <div className="checkout">
      <InfoCheckout/>
      {/* <ServicesCheckout/> */}
    </div>
  );
}


