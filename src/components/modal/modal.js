import React from 'react'
import ButtonBuy from '../buttonBuy/buttonBuy'
import './modal.scss'

const Modal = ({ modalClose, show,title, urlImage,description,price}) => {
  const modalChange = show ? "modal display-block" : "modal display-none";
  return (
    <React.Fragment>
    <div className={modalChange}>
      <button onClick={modalClose} className="modal__btn"></button>
      <h2 className="modal__inf">{title}</h2>
      <img src={urlImage} alt="" className="modal__img"/>
      <p className="modal__inf">{description}</p>
      <p className="modal__inf">{price}</p>
      <ButtonBuy/>
    </div>
    </React.Fragment>
  );
};

export default Modal