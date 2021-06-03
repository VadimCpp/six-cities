import React from 'react';
import PropTypes from 'prop-types';
import Hotel from '../hotel/hotel';

function Main({places, hotels}) {

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
        {hotels.map((hotel) => <Hotel key={hotel.id} {...hotel} />)}
      </div>

      <div className="map">
        <span>TODO: insert map</span>
      </div>
    </div>
  );
}

Main.propTypes = {
  places: PropTypes.number.isRequired,
  hotels: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    preview: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })),
};

export default Main;
