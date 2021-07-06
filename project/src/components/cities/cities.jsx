import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CITIES as CITIES_ARRAY } from '../../const';
import { ActionCreator } from '../../store/action';

const cities = Object.values(CITIES_ARRAY);

function Cities(props) {
  const { city, setCity } = props;

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
                  setCity(c.name);
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

Cities.propTypes = {
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
};

const mapStateToProps = ({ CITIES }) => ({
  city: CITIES.city,
});

const mapDispatchToProps = (dispatch) => ({
  setCity(city) {
    dispatch(ActionCreator.setCity(city));
  },
});

export { Cities };
export default connect(mapStateToProps, mapDispatchToProps)(Cities);
