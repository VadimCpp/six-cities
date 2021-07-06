import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import offersProp from '../../types/offers.prop';
import { CITIES, SortingTypes } from '../../const';
import { getOffers, getIsDataLoaded } from '../../store/offers-data/selector';
import { getCity } from '../../store/cities-data/selector';
import Header from '../header/header';
import Offers from '../offers/offers';
import CitiesMap from '../cities-map/cities-map';
import Cities from '../cities/cities';
import Sorting from '../sorting/sorting';
import Spinner from '../spinner/spinner';

function MainScreen(props) {
  const { city, offers, isDataLoaded } = props;
  const [ sortType, setSortType ] = useState(SortingTypes.POPULAR);
  const [ activeOfferId, setActiveOfferId ] = useState(0);

  const offersForCity = useMemo(() => {
    const anOffersForCity = Object.values(offers).filter((o) => o.city.name === city);
    switch (sortType) {
      case SortingTypes.LOW_TO_HIGH:
        anOffersForCity.sort((a, b) => a.price - b.price);
        break;
      case SortingTypes.HIGH_TO_LOW:
        anOffersForCity.sort((a, b) => b.price - a.price);
        break;
      case SortingTypes.TOP_RATED:
        anOffersForCity.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return anOffersForCity;
  }, [city, offers, sortType]);

  return (
    <div className="page page--gray page--main">
      <Header />
      {
        isDataLoaded ? (
          <main className="page__main page__main--index">
            <h1 className="visually-hidden">Cities</h1>
            <Cities />
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offersForCity.length} places to stay in {city}</b>
                  <Sorting type={sortType} onSortingChange={setSortType}/>
                  <Offers
                    offers={offersForCity}
                    placesListClass="cities__places-list"
                    placeCardClass="cities__place-card"
                    imageWrapperClass="cities__image-wrapper"
                    onActiveOfferSet={setActiveOfferId}
                  />
                </section>
                <div className="cities__right-section">
                  <CitiesMap city={CITIES[city]} offers={offersForCity} className="cities__map" activeOfferId={activeOfferId} />
                </div>
              </div>
            </div>
          </main>
        ) : (
          <Spinner />
        )
      }
    </div>
  );
}

MainScreen.propTypes = {
  city: PropTypes.string.isRequired,
  offers: offersProp.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  offers: getOffers(state),
  isDataLoaded: getIsDataLoaded(state),
});

export { MainScreen };
export default connect(mapStateToProps)(MainScreen);
