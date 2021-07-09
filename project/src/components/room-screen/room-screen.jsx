import React, { useEffect, useState } from 'react';
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
  const [ activeOfferId, setActiveOfferId ] = useState(0);

  const offer = offers[Number(id)];
  const nearby = offer?.nearby || {};

  useEffect(() => {
    if (!offer?.nearby || !offer?.comments)
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
            <CitiesMap city={offer.city} offers={nearby} className="property__map" activeOfferId={activeOfferId}/>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <Offers
                offers={nearby}
                placesListClass="near-places__list"
                placeCardClass="near-places__card"
                imageWrapperClass="near-places__image-wrapper"
                onActiveOfferSet={setActiveOfferId}
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
