import React from 'react'
import './infoCake.scss'

export default ({id ,imageUrl,name,price,modalInfo,idImage,BuyButton}) =>
  <div className="cake">
    <h2 className="cake__title">{name}</h2>
    <button className="cake__modal" onClick={modalInfo}><img alt={id} src={imageUrl} className="cake__img" id={idImage}/></button>
    <p>{price}</p>
    <button onClick={BuyButton}  className="cake__button--buy" id={id}>buy now</button>
</div>
