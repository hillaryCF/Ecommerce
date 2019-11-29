import React from 'react';
import { NavLink } from 'react-router-dom'
import ServicesCheckout from '../services/servicesCheckout'
import './checkout.scss'

export default () => {
  return (
    <div className="checkout">
      <NavLink to="/"><img src="../img/arrow-black.svg" alt="" className="chechkout__arrow"/></NavLink>
      <h1>your shopping car</h1>
      <ServicesCheckout/>
    </div>
  );
}


