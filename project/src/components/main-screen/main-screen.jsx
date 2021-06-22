import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cityProp from '../../types/city.prop';
import { ActionCreator } from '../../store/action';
import Header from '../header/header';
import Cities from '../cities/cities';

function MainScreen(props) {
  const { cities, city, setCity } = props;

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
                  <Link
                    className={`locations__item-link tabs__item ${c.name === city.name ? 'tabs__item--active' : ''}`}
                    onClick={() => {
                      setCity(c);
                    }}
                    to="/"
                  >
                    <span>{c.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <Cities city={city} />
      </main>
    </div>
  );
}

MainScreen.propTypes = {
  cities: PropTypes.arrayOf(cityProp).isRequired,
  city: cityProp.isRequired,
  setCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  setCity(city) {
    dispatch(ActionCreator.setCity(city));
  },
});

export { MainScreen };
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
