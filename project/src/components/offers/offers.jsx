import React, { useState } from 'react';
import PropTypes from 'prop-types';
import offersProp from '../../types/offers.prop';
import Offer from '../offer/offer';

function Offers({offers, nearPlaces}) {
  const [activeOfferId, setActiveOfferId] = useState(0);

  return (
    <div className={nearPlaces ? 'near-places__list places__list' : 'cities__places-list places__list tabs__content'}>
      {offers.map((offer) =>
        (
          <Offer
            key={offer.id}
            offer={offer}
            onMouseEnter={() => setActiveOfferId(offer.id)}
            onMouseLeave={() => setActiveOfferId(0)}
            isActive={activeOfferId === offer.id}
            fromFavoriteScreen={false}
            fromRoomScreen={nearPlaces}
          />
        ))}
    </div>
  );
}

Offers.propTypes = {
  offers: offersProp.isRequired,
  nearPlaces: PropTypes.bool,
};

export default Offers;
