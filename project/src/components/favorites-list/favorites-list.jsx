import React from 'react';
import { Link } from 'react-router-dom';
import FavoritesCard from '../favorites-card/favorites-card';

function FavoritesList() {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/">
                <span>Amsterdam</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            <FavoritesCard />
            <FavoritesCard />
          </div>
        </li>

        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/">
                <span>Cologne</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            <FavoritesCard />
          </div>
        </li>
      </ul>
    </section>
  );
}

export default FavoritesList;
