import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import groupByCities from '../../utils/groupByCities';
import offersProp from '../../types/offers.prop';
import Offer from '../offer/offer';

function FavoritesList({offers}) {
  const cities = groupByCities(offers);

  return cities.length ? (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {cities.map((city) => (
          <li className="favorites__locations-items" key={city.name}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={AppRoute.ROOT}>
                  <span>{city.name}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {city.offers.map((offer) => (
                <Offer
                  key={offer.id}
                  offer={offer}
                  fromFavoriteScreen
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  ) : (
    <section className="favorites favorites--empty">
      <h1 className="visually-hidden">Favorites (empty)</h1>
      <div className="favorites__status-wrapper">
        <b className="favorites__status">Nothing yet saved.</b>
        <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
      </div>
    </section>
  );
}

FavoritesList.propTypes = {
  offers: offersProp.isRequired,
};

export default FavoritesList;
