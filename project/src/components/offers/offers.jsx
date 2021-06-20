import React, { useState } from 'react';
import PropTypes from 'prop-types';
import offersProp from '../../types/offers.prop';
import Offer from '../offer/offer';

function Offers({offers, nearPlaces}) {
  // eslint-disable-next-line no-unused-vars
  const [activeOfferId, setActiveOfferId] = useState(0);
  // TODO: использовать activeOfferId для подсветки на карте

  return (
    // TODO: заменить nearPlaces именем класса
    <div className={nearPlaces ? 'near-places__list places__list' : 'cities__places-list places__list tabs__content'}>
      {offers.map((offer) =>
        (
          <Offer
            key={offer.id}
            offer={offer}
            onMouseEnter={() => setActiveOfferId(offer.id)}
            onMouseLeave={() => setActiveOfferId(0)}
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
