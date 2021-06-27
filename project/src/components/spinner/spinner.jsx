import React from 'react';

function Spinner() {
  return (
    <main className="page__main page__main--favorites page__main--favorites-empty">
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <div className="favorites__status-wrapper">
            <p className="favorites__status-description">Загрузка...</p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Spinner;
