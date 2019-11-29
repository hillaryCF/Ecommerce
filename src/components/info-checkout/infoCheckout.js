import React from 'react'
import './infoCheckout.scss'

export default ({id, imageUrl, name, price, idImage, closeButton, category}) =>
  <div className="check">
    <img alt="" src={imageUrl}  id={idImage} className="check__img"/>
    <div className="check__info">
      <h2 className="check__info--title">{name}</h2>
      <p className="check__info--category">{category}</p>
      <p className="check__info--price">{price}</p>
    </div>
    <button onClick={closeButton} id={id} className="check__close"></button>
  </div>
