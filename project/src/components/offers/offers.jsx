import React from 'react';
import PropTypes from 'prop-types';
import Hotel from '../hotel/hotel';

function Offers({offers}) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Hotel key={offer.id} {...offer} />)}
    </div>
  );
}

Offers.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    preview: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })),
};

export default Offers;
