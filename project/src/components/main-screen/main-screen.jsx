import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CITIES, SortingTypes } from '../../const';
import { getIsDataLoaded, getOffersForCity } from '../../store/offers-data/selector';
import { getCity } from '../../store/cities-data/selector';
import Header from '../header/header';
import Offers from '../offers/offers';
import CitiesMap from '../cities-map/cities-map';
import Cities from '../cities/cities';
import Sorting from '../sorting/sorting';
import Spinner from '../spinner/spinner';

function MainScreen() {
  const city = useSelector(getCity);
  const theOffersForCity = useSelector(getOffersForCity);
  const isDataLoaded = useSelector(getIsDataLoaded);

  const [ sortType, setSortType ] = useState(SortingTypes.POPULAR);
  const [ activeOfferId, setActiveOfferId ] = useState(0);

  const offersForCity = useMemo(() => {
    const offersForCityArray = [ ...theOffersForCity ];
    switch (sortType) {
      case SortingTypes.LOW_TO_HIGH:
        offersForCityArray.sort((a, b) => a.price - b.price);
        break;
      case SortingTypes.HIGH_TO_LOW:
        offersForCityArray.sort((a, b) => b.price - a.price);
        break;
      case SortingTypes.TOP_RATED:
        offersForCityArray.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return offersForCityArray;
  }, [sortType, theOffersForCity]);

  return (
    <div className="page page--gray page--main">
      <Header />
      {isDataLoaded && offersForCity.length > 0 && (
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
      )}
      {isDataLoaded && offersForCity.length === 0 && (
        <main className="page__main page__main--index page__main--index-empty">
          <h1 className="visually-hidden">Cities</h1>
          <Cities />
          <div className="cities">
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in {city}</p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          </div>
        </main>
      )}
      {!isDataLoaded && <Spinner />}
    </div>
  );
}

export { MainScreen };
export default MainScreen;
