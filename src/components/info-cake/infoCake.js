import React from 'react';

export default ({id ,imageUrl,name,description,price}) =>
<div className="cake">
  <h2 className="cake__title">{name}</h2>
  <img alt={id} src={imageUrl} className="cake__img"/>
  <p>{description}</p>
  <p>{price}</p>
</div>
