import React from 'react';
import PropTypes from 'prop-types';
import Hotel from '../hotel/hotel';

const hotels = [
  {
    'preview_image': 'https://7.react.pages.academy/static/hotel/19.jpg',
    'title': 'The Pondhouse - A Magical Place',
    'rating': 4.3,
    'type': 'hotel',
    'price': 448,
    'id': 3,
  },
  {
    'preview_image': 'https://7.react.pages.academy/static/hotel/1.jpg',
    'title': 'Waterfront with extraordinary view',
    'rating': 2,
    'type': 'room',
    'price': 285,
    'id': 4,
  },
  {
    'preview_image': 'https://7.react.pages.academy/static/hotel/8.jpg',
    'title': 'Perfectly located Castro',
    'rating': 2.8,
    'type': 'room',
    'price': 162,
    'id': 5,
  },
  {
    'preview_image': 'https://7.react.pages.academy/static/hotel/7.jpg',
    'title': 'Amazing and Extremely Central Flat',
    'rating': 2.2,
    'type': 'room',
    'price': 245,
    'id': 6,
  },
  {
    'preview_image': 'https://7.react.pages.academy/static/hotel/18.jpg',
    'title': 'Waterfront with extraordinary view',
    'rating': 3,
    'type': 'room',
    'price': 217,
    'id': 7,
  },
];

function Main({places}) {

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
        {places} places to stay in Paris
        {hotels.map((hotel) => <Hotel key={hotel.id} preview={hotel.preview_image} price={hotel.price} rating={hotel.rating} title={hotel.title} type={hotel.type}/>)}
      </div>

      <div className="map">
        <span>TODO: insert map</span>
      </div>
    </div>
  );
}

Main.propTypes = {
  places: PropTypes.number.isRequired,
};

export default Main;
