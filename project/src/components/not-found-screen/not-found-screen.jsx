import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

function NotFoundScreen() {
  return (
    <div className="page page--favorites-empty">
      <Header />

      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">404</b>
              <p className="favorites__status-description">Not Found</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default NotFoundScreen;
