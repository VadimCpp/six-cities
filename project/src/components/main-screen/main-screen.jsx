import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/header';
import Offers from '../offers/offers';
import CitiesMap from '../cities-map/cities-map';
import offersProp from '../offers/offers.prop';

function MainScreen({offers}) {
  const [city, setCity] = useState('Amsterdam');
  const [sortedOffers, setSortedOffers] = useState([]);

  useEffect(() => {
    setSortedOffers(offers.filter((o) => o.city.name === city));
  }, [city, offers]);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {/* TODO: сформировать список городлов из оферов */}
              {[
                'Paris',
                'Cologne',
                'Brussels',
                'Amsterdam',
                'Hamburg',
                'Dusseldorf',
              ].map((cityName) => (
                <li className="locations__item" key={cityName}>
                  <Link
                    className={`locations__item-link tabs__item ${cityName === city ? 'tabs__item--active' : ''}`}
                    onClick={() => setCity(cityName)}
                    to="/"
                  >
                    <span>{cityName}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{sortedOffers.length} places to stay in Amsterdam</b>
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
              <Offers offers={sortedOffers}/>
            </section>
            <CitiesMap offers={sortedOffers} city={sortedOffers[0].city}/>
          </div>
        </div>
      </main>
    </div>
  );
}

MainScreen.propTypes = {
  offers: offersProp.isRequired,
};

export default MainScreen;
