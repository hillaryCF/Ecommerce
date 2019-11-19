import React from 'react'
import '../sortCategoryButton/sortButton'

// upward: low - high
// falling: high - low

const SortButtoncategory = ({show, upward, falling }) => {
  const sortChange = show ? "sort display-block" : "sort display-none";
  return (
      <div className={sortChange}>
        <ul>
          <li className="list__item"><button onClick={upward} >animals</button></li>
          <li className="list__item"><button onClick={falling}>body parts</button></li>
          <li className="list__item"><button onClick={falling}>characters</button></li>
          <li className="list__item"><button onClick={falling}>small unusual</button></li>
        </ul>
      </div>
  );
};

export default SortButtoncategory