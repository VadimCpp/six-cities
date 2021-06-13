import React from 'react';
import Offer from '../offer/offer';
import offersProp from './offers.prop';

function Offers({offers}) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Offer key={offer.id} {...offer} />)}
    </div>
  );
}

Offers.propTypes = {
  offers: offersProp,
};

export default Offers;
