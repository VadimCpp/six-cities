import React, { useState } from 'react';
import { SortingTypes } from '../../const';

const types = Object.values(SortingTypes);

function Sorting() {
  const [ visible, setVisible ] = useState(false);
  const [ type, setType ] = useState(SortingTypes.POPULAR);
  return (
    <div className="places__sorting">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" onClick={() => setVisible(true)}>
        {type}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {visible && (
        <ul className="places__options places__options--custom places__options--opened">
          {types.map((aType, idx) => (
            <li
              key={aType}
              className={`places__option ${type === aType ? 'places__option--active' : ''}`}
              tabIndex={idx}
              onClick={() => {
                setType(aType);
                setVisible(false);
              }}
            >
              {aType}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Sorting;
