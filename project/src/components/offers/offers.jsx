import React, { useState } from 'react';
import PropTypes from 'prop-types';
import offersProp from '../../types/offers.prop';
import Offer from '../offer/offer';

function Offers({offers, nearPlaces, placesListClass, placeCardClass = '', imageWrapperClass = ''}) {
  // eslint-disable-next-line no-unused-vars
  const [activeOfferId, setActiveOfferId] = useState(0);
  // TODO: использовать activeOfferId для подсветки на карте

  return (
    <div className={`${placesListClass} places__list`}>
      {offers.map((offer) =>
        (
          <Offer
            key={offer.id}
            offer={offer}
            onMouseEnter={() => setActiveOfferId(offer.id)}
            onMouseLeave={() => setActiveOfferId(0)}
            fromFavoriteScreen={false}
            fromRoomScreen={nearPlaces}
            placeCardClass={placeCardClass}
            imageWrapperClass={imageWrapperClass}
          />
        ))}
    </div>
  );
}

Offers.propTypes = {
  offers: offersProp.isRequired,
  nearPlaces: PropTypes.bool,
  placesListClass: PropTypes.string.isRequired,
  placeCardClass: PropTypes.string,
  imageWrapperClass: PropTypes.string,
};

export default Offers;
