import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cityProp from '../../types/city.prop';
import offers from '../../mocks/offers.json';
import getCities from '../../utils/getCities';
import { ActionCreator } from '../../store/action';
import Header from '../header/header';
import Cities from '../cities/cities';

function MainScreen(props) {
  const { city, setCity } = props;
  const cities = getCities(offers);

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
                    className={`locations__item-link tabs__item ${city && c.name === city.name ? 'tabs__item--active' : ''}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setCity(c);
                    }}
                  >
                    <span>{c.name}</span>
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
        {city ? <Cities city={city} /> : <p style={{textAlign:'center'}}>Выбрите город подалуйста! Теперь в сторе город по умолчанию не выбран</p>}
      </main>
    </div>
  );
}

MainScreen.propTypes = {
  city: cityProp,
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
