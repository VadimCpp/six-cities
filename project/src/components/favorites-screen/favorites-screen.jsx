import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/header';
import FavoritesList from '../favorites-list/favorites-list';
import offersProp from '../offers/offers.prop';

function FavoritesScreen({offers}) {
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <FavoritesList offers={offers}/>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

FavoritesScreen.propTypes = {
  offers: offersProp.isRequired,
};

export default FavoritesScreen;
