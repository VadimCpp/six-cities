import React from 'react';

function Main() {
  return (
    <div>
      <div className="header">
        <div className="header__logo">
          <span>6 cities</span>
        </div>
        <div className="header__user">
          <span>Oliver.conner@gmail.com</span>
        </div>
        <ul className="header__cities">
          <li>Paris</li>
          <li>Cologne</li>
          <li>Brussels</li>
          <li>Amsterdam</li>
          <li>Hamburg</li>
          <li>Dusseldorf</li>
        </ul>
      </div>

      <div className="hotels">
        <div className="hotel">
          <img className="hotel__preview" src="https://7.react.pages.academy/static/hotel/19.jpg" alt="preview" width="260" height="200"/>
          <span className="hotel__price">448 € / night</span>
          <span className="hotel__rating">4.3</span>
          <span className="hotel__title">The Pondhouse - A Magical Place</span>
          <span className="hotel__type">hotel</span>
        </div>

        <div className="hotel">
          <img className="hotel__preview" src="https://7.react.pages.academy/static/hotel/1.jpg" alt="preview" width="260" height="200"/>
          <span className="hotel__price"> 285 € / night</span>
          <span className="hotel__rating">2</span>
          <span className="hotel__title">Waterfront with extraordinary view</span>
          <span className="hotel__type">room</span>
        </div>

        <div className="hotel">
          <img className="hotel__preview" src="https://7.react.pages.academy/static/hotel/8.jpg" alt="preview" width="260" height="200"/>
          <span className="hotel__price"> 162 € / night</span>
          <span className="hotel__rating">2.8</span>
          <span className="hotel__title">Perfectly located Castro</span>
          <span className="hotel__type">room</span>
        </div>

        <div className="hotel">
          <img className="hotel__preview" src="https://7.react.pages.academy/static/hotel/7.jpg" alt="preview" width="260" height="200"/>
          <span className="hotel__price"> 245 € / night</span>
          <span className="hotel__rating">2.2</span>
          <span className="hotel__title">Amazing and Extremely Central Flat</span>
          <span className="hotel__type">room</span>
        </div>

        <div className="hotel">
          <img className="hotel__preview" src="https://7.react.pages.academy/static/hotel/18.jpg" alt="preview" width="260" height="200"/>
          <span className="hotel__price"> 217 € / night</span>
          <span className="hotel__rating">3</span>
          <span className="hotel__title">Waterfront with extraordinary view</span>
          <span className="hotel__type">room</span>
        </div>
      </div>

      <div className="map">
        <span>TODO: insert map</span>
      </div>
    </div>
  );
}

export default Main;
