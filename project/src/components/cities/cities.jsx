import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CITIES as CITIES_ARRAY } from '../../const';
import { setCity } from '../../store/action';

const cities = Object.values(CITIES_ARRAY);

function Cities(props) {
  const { city, doSetCity } = props;

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
                  doSetCity(c.name);
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
  doSetCity: PropTypes.func.isRequired,
};

const mapStateToProps = ({ CITIES }) => ({
  city: CITIES.city,
});

const mapDispatchToProps = (dispatch) => ({
  doSetCity(city) {
    dispatch(setCity(city));
  },
});

export { Cities };
export default connect(mapStateToProps, mapDispatchToProps)(Cities);
