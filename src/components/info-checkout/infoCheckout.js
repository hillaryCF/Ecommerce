import React from 'react'
import './infoCheckout.scss'

export default ({id ,imageUrl,name,price,idImage,BuyButton}) =>
  <div className="cake">
    <h2 className="cake__title">{name}</h2>
    <img alt="" src={imageUrl} className="cake__img" id={idImage}/>
    <p>{price}</p>
    <button onClick={BuyButton}  className="cake__button--buy" id={id}>delete</button>
</div>
