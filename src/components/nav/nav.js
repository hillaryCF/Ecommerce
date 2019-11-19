import React from 'react';
import { NavLink } from 'react-router-dom'
import './nav.scss'

export default () => {
  return (
    <div className="nav">
      <NavLink to="/"><img src="../img/logo.svg" alt="" className="nav__logo"/></NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/checkout">checkout</NavLink>
      <NavLink to="/checkout"><img src="../img/shopping-car.svg" alt=""/></NavLink>
    </div>
  );
}


