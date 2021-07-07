import React from 'react';
import Header from '../header/header';
import FavoritesList from '../favorites-list/favorites-list';
import Footer from '../footer/footer';

function FavoritesScreen() {
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <FavoritesList />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default FavoritesScreen;
