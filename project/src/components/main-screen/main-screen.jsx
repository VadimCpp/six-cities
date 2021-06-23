import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CITIES } from '../../const';
import { ActionCreator } from '../../store/action';
import Header from '../header/header';
import Cities from '../cities/cities';

const cities = Object.values(CITIES);

function MainScreen(props) {
  const { city, setCity } = props;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {cities.map((c) => (
                <li className="locations__item" key={c.name}>
                  <span
                    className={`locations__item-link tabs__item ${c.name === city ? 'tabs__item--active' : ''}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
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
        <Cities city={CITIES[city]} />
      </main>
    </div>
  );
}

MainScreen.propTypes = {
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  setCity(city) {
    dispatch(ActionCreator.setCity(city));
  },
});

export { MainScreen };
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
