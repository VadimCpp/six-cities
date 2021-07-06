import React from 'react';
import PropTypes from 'prop-types';
import offersProp from '../../types/offers.prop';
import Offer from '../offer/offer';

function Offers({offers, placesListClass, placeCardClass = '', imageWrapperClass = '', onActiveOfferSet = () => {}}) {
  return (
    <div className={`${placesListClass} places__list`}>
      {Object.values(offers).map((offer) =>
        (
          <Offer
            key={offer.id}
            offer={offer}
            onMouseEnter={() => onActiveOfferSet(offer.id)}
            onMouseLeave={() => onActiveOfferSet(0)}
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

export { Offers };
export default React.memo(Offers);
