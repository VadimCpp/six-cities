import React, { useState } from 'react';
import offersProp from '../../types/offers.prop';
import Offer from '../offer/offer';

function Offers({offers}) {
  const [activeOfferId, setActiveOfferId] = useState(0);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        (
          <Offer
            key={offer.id}
            offer={offer}
            onMouseEnter={() => setActiveOfferId(offer.id)}
            onMouseLeave={() => setActiveOfferId(0)}
            isActive={activeOfferId === offer.id}
            fromFavoriteScreen={false}
          />
        ))}
    </div>
  );
}

Offers.propTypes = {
  offers: offersProp.isRequired,
};

export default Offers;
