import React from 'react';
import { NavLink } from 'react-router-dom'
import './nav.scss'

export default ({number}) => {
  return (
    <div className="nav">
      <NavLink to="/"><img src="../img/logo.svg" alt="" className="nav__logo"/></NavLink>
      <ul className="nav__list">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/checkout">checkout</NavLink></li>
        <li><NavLink to="/checkout" className="nav__contact">contact</NavLink></li>
      </ul>
      <NavLink to="/checkout" className="nav__bag"><img src="../img/shopping-bag.svg" alt="" /></NavLink>
      <span className="checkout__num">{number}</span>
    </div>
  );
}


