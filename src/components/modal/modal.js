import React from 'react'
import './modal.scss'

const Modal = ({ modalClose, show,title, urlImage,description,price}) => {
  const modalChange = show ? "modal display-block" : "modal display-none";
  return (
    <React.Fragment>
    <div className={modalChange}>
      <button onClick={modalClose} className="modal__btn"></button>
      <h2 className="modal__title">{title}</h2>
      <img src={urlImage} alt="" className="modal__img"/>
      <ul className="modal__list" >
        {description}
      </ul>
      <p className="modal__price">{price}</p>
    </div>
    </React.Fragment>
  );
};

export default Modal