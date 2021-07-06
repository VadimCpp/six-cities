import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import offersProp from '../../types/offers.prop';
import { fetchOfferData } from '../../store/api-actions';
import Header from '../header/header';
import Footer from '../footer/footer';
import CitiesMap from '../cities-map/cities-map';
import Offers from '../offers/offers';
import Room from '../room/room';

function RoomScreen(props) {
  const { offers, doFetchOfferData } = props;
  const { id } = useParams();
  const [ activeOfferId, setActiveOfferId ] = useState(0);

  const offer = offers[Number(id)];
  const nearby = offer?.nearby || [];

  useEffect(() => {
    if (!offer?.nearby || !offer?.comments)
    {
      doFetchOfferData(id);
    }
  }, [doFetchOfferData, id, offer]);

  if (!offer) {
    return null;
  }

  return (
    <div className="page">
      <Header />

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

      <Footer />
    </div>
  );
}

RoomScreen.propTypes = {
  offers: offersProp,
  doFetchOfferData: PropTypes.func.isRequired,
};

const mapStateToProps = ({ OFFERS }) => ({
  offers: OFFERS.offers,
});

const mapDispatchToProps = (dispatch) => ({
  doFetchOfferData(id) {
    dispatch(fetchOfferData(id));
  },
});

export { RoomScreen };
export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen);
