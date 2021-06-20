import React from 'react';
import offersProp from '../../types/offers.prop';
import Header from '../header/header';
import FavoritesList from '../favorites-list/favorites-list';
import Footer from '../footer/footer';

function FavoritesScreen({offers}) {
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

FavoritesScreen.propTypes = {
  offers: offersProp.isRequired,
};

export default FavoritesScreen;
