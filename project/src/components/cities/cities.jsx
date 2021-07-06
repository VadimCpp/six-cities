import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CITIES } from '../../const';
import { setCity } from '../../store/action';
import { getCity } from '../../store/cities-data/selector';

const cities = Object.values(CITIES);

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

const mapStateToProps = (state) => ({
  city: getCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  doSetCity(city) {
    dispatch(setCity(city));
  },
});

export { Cities };
export default connect(mapStateToProps, mapDispatchToProps)(Cities);
