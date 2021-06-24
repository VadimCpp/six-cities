import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import offersProp from '../../types/offers.prop';
import Offer from '../offer/offer';

function Offers({offers, placesListClass, placeCardClass = '', imageWrapperClass = '', onActiveOfferSet = () => {}}) {
  const [activeOfferId, setActiveOfferId] = useState(0);

  useEffect(() => onActiveOfferSet(activeOfferId), [ activeOfferId, onActiveOfferSet ]);

  return (
    <div className={`${placesListClass} places__list`}>
      {offers.map((offer) =>
        (
          <Offer
            key={offer.id}
            offer={offer}
            onMouseEnter={() => setActiveOfferId(offer.id)}
            onMouseLeave={() => setActiveOfferId(0)}
            placeCardClass={placeCardClass}
            imageWrapperClass={imageWrapperClass}
          />
        ))}
    </div>
  );
}

Offers.propTypes = {
  offers: offersProp.isRequired,
  placesListClass: PropTypes.string.isRequired,
  placeCardClass: PropTypes.string,
  imageWrapperClass: PropTypes.string,
  onActiveOfferSet: PropTypes.func,
};

export default Offers;
