import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOfferData } from '../../store/api-actions';
import { getOffers, getIsDataLoaded } from '../../store/offers-data/selector';
import Header from '../header/header';
import Footer from '../footer/footer';
import CitiesMap from '../cities-map/cities-map';
import Offers from '../offers/offers';
import Room from '../room/room';
import Spinner from '../spinner/spinner';

function RoomScreen() {
  const offers = useSelector(getOffers);
  const isDataLoaded = useSelector(getIsDataLoaded);
  const dispatch = useDispatch();

  const { id } = useParams();

  const offer = offers[Number(id)];
  const nearby = offer?.nearby || [];
  const nearbyOffers = nearby.map((nearbyId) => offers[nearbyId]);

  useEffect(() => {
    if (!Array.isArray(offer?.nearby) || !Array.isArray(offer?.reviews))
    {
      dispatch(fetchOfferData(id));
    }
  }, [dispatch, id, offer]);

  return (
    <div className="page">
      <Header />
      {isDataLoaded && (
        <main className="page__main page__main--property">
          <section className="property">
            <Room offer={offer} />
            <CitiesMap city={offer.city} offers={[...nearbyOffers, offer]} className="property__map" activeOfferId={offer.id}/>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <Offers
                offers={nearbyOffers}
                placesListClass="near-places__list"
                placeCardClass="near-places__card"
                imageWrapperClass="near-places__image-wrapper"
              />
            </section>
          </div>
        </main>
      )}
      {!isDataLoaded && <Spinner />}
      <Footer />
    </div>
  );
}

export { RoomScreen };
export default RoomScreen;
