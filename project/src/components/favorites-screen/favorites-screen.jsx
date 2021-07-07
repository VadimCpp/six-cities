import React from 'react';
import { useSelector } from 'react-redux';
import { getOffers } from '../../store/offers-data/selector';
import Header from '../header/header';
import FavoritesList from '../favorites-list/favorites-list';
import Footer from '../footer/footer';

function FavoritesScreen() {
  const offers = useSelector(getOffers);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <FavoritesList offers={offers}/>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default FavoritesScreen;
