import React from 'react';
import './sortButton.scss'

// upward: low - high
// falling: high - low

const SortButton = ({show, upward, falling }) => {
  const sortChange = show ? "sort display-block" : "sort display-none";
  return (
      <div className={sortChange}>
        <ul>
          <li className="list__item"><button onClick={upward} className="list__btn">price [ high - low]</button></li>
          <li className="list__item"><button onClick={falling} className="list__btn">price [ low - high]</button></li>
        </ul>
      </div>
  );
};

export default SortButton