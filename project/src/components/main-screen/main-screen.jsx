import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import offersProp from '../../types/offers.prop';
import { CITIES, SortingTypes } from '../../const';
import Header from '../header/header';
import Offers from '../offers/offers';
import CitiesMap from '../cities-map/cities-map';
import Cities from '../cities/cities';
import Sorting from '../sorting/sorting';

function MainScreen(props) {
  const { city, offers } = props;
  const [ sortType, setSortType ] = useState(SortingTypes.POPULAR);

  let offersForCity = offers.filter((o) => o.city.name === city);
  switch (sortType) {
    case SortingTypes.LOW_TO_HIGH:
      offersForCity = offersForCity.sort((a, b) => a.price - b.price);
      break;
    case SortingTypes.HIGH_TO_LOW:
      offersForCity = offersForCity.sort((a, b) => b.price - a.price);
      break;
    case SortingTypes.TOP_RATED:
      offersForCity = offersForCity.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

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
              <Sorting initialSorting={sortType} onSortingChange={setSortType}/>
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
