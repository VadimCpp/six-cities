import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const hotels = [
  {
    'preview': 'https://7.react.pages.academy/static/hotel/19.jpg',
    'title': 'The Pondhouse - A Magical Place',
    'rating': 4.3,
    'type': 'hotel',
    'price': 448,
    'id': 3,
  },
  {
    'preview': 'https://7.react.pages.academy/static/hotel/1.jpg',
    'title': 'Waterfront with extraordinary view',
    'rating': 2,
    'type': 'room',
    'price': 285,
    'id': 4,
  },
  {
    'preview': 'https://7.react.pages.academy/static/hotel/8.jpg',
    'title': 'Perfectly located Castro',
    'rating': 2.8,
    'type': 'room',
    'price': 162,
    'id': 5,
  },
  {
    'preview': 'https://7.react.pages.academy/static/hotel/7.jpg',
    'title': 'Amazing and Extremely Central Flat',
    'rating': 2.2,
    'type': 'room',
    'price': 245,
    'id': 6,
  },
  {
    'preview': 'https://7.react.pages.academy/static/hotel/18.jpg',
    'title': 'Waterfront with extraordinary view',
    'rating': 3,
    'type': 'room',
    'price': 217,
    'id': 7,
  },
];
const places = hotels.length;

ReactDOM.render(
  <React.StrictMode>
    <App places={places} hotels={hotels}/>
  </React.StrictMode>,
  document.getElementById('root'));
