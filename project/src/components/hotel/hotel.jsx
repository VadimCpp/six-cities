import React from 'react';
import PropTypes from 'prop-types';

function Hotel({preview, price, rating, title, type}) {
  return (
    <div className="hotel">
      <img className="hotel__preview" src={preview} alt="preview" width="260" height="200"/>
      <span className="hotel__price"> {price} € / night</span>
      <span className="hotel__rating">{rating}</span>
      <span className="hotel__title">{title}</span>
      <span className="hotel__type">{type}</span>
    </div>
  );
}

Hotel.propTypes = {
  preview: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Hotel;
