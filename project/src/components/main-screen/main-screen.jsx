import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import offersProp from '../../types/offers.prop';
import { CITIES } from '../../const';
import Header from '../header/header';
import Offers from '../offers/offers';
import CitiesMap from '../cities-map/cities-map';
import Cities from '../cities/cities';

function MainScreen(props) {
  const { city, offers } = props;
  const offersForCity = offers.filter((o) => o.city.name === city);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Cities />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersForCity.length} places to stay in {city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                {/* TODO: реализовать */}
                {/* <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul> */}
              </form>
              <Offers
                offers={offersForCity}
                placesListClass="cities__places-list"
                placeCardClass="cities__place-card"
                imageWrapperClass="cities__image-wrapper"
              />
            </section>
            <div className="cities__right-section">
              <CitiesMap city={CITIES[city]} offers={offersForCity} className="cities__map" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

MainScreen.propTypes = {
  city: PropTypes.string.isRequired,
  offers: offersProp.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
});

export { MainScreen };
export default connect(mapStateToProps)(MainScreen);
