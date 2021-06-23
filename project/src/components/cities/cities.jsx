import React from 'react';
import offers from '../../mocks/offers.json';
import cityProp from '../../types/city.prop';
import Offers from '../offers/offers';
import CitiesMap from '../cities-map/cities-map';

function Cities({ city }) {
  const offersForCity = offers.filter((o) => o.city.name === city.name);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersForCity.length} places to stay in {city.name}</b>
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
          <CitiesMap city={city} offers={offersForCity} className="cities__map" />
        </div>
      </div>
    </div>
  );
}

Cities.propTypes = {
  city: cityProp.isRequired,
};

export default Cities;
