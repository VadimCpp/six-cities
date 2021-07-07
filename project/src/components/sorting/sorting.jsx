import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SortingTypes } from '../../const';

const types = Object.values(SortingTypes);

function Sorting({ type, onSortingChange }) {
  const [ visible, setVisible ] = useState(false);
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
                setVisible(false);
                onSortingChange(aType);
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

Sorting.propTypes = {
  type: PropTypes.string.isRequired,
  onSortingChange: PropTypes.func.isRequired,
};

export { Sorting };
export default React.memo(Sorting);
