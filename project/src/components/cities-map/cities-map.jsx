import React from 'react';
import offersProp from '../offers/offers.prop';

function CitiesMap({offers}) {
  // TODO:
  return (
    <section className="cities__map map"></section>
  );
}

CitiesMap.propTypes = {
  offers: offersProp.isRequired,
};

export default CitiesMap;
