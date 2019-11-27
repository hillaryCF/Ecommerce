import React from 'react'
import './buttonSort.scss'

export default ({ name, actionSort}) => {
  return (
    <React.Fragment>
      <button onClick={actionSort} className="button__sort">{name}</button>
      <img src="../img/arrow.svg" className="button__img" alt=""/>
    </React.Fragment>
  );
}


