import React, { useState } from 'react';
import Offer from '../offer/offer';
import offersProp from './offers.prop';

function Offers({offers}) {
  const [activeOfferId, setActiveOfferId] = useState(0);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        (
          <Offer
            key={offer.id}
            offer={offer}
            // TODO: переименовать handle => on
            handleMouseEnter={() => setActiveOfferId(offer.id)}
            handleMouseLeave={() => setActiveOfferId(0)}
            isActive={activeOfferId === offer.id}
          />
        ))}
    </div>
  );
}

Offers.propTypes = {
  offers: offersProp,
};

export default Offers;
