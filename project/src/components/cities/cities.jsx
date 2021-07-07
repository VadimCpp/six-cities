import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CITIES } from '../../const';
import { setCity } from '../../store/action';
import { getCity } from '../../store/cities-data/selector';

const cities = Object.values(CITIES);

function Cities() {
  const city = useSelector(getCity);
  const dispatch = useDispatch();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((c) => (
            <li className="locations__item" key={c.name}>
              <span
                className={`locations__item-link tabs__item ${c.name === city ? 'tabs__item--active' : ''}`}
                style={{ cursor: 'pointer' }}
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(setCity(c.name));
                }}
              >
                <span>{c.name}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export { Cities };
export default Cities;
