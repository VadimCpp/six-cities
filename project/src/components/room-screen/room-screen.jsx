import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import offerDataProp from '../../types/offerData.prop';
import { fetchOfferData } from '../../store/api-actions';
import Header from '../header/header';
import Footer from '../footer/footer';
import CitiesMap from '../cities-map/cities-map';
import Offers from '../offers/offers';
import Room from '../room/room';

function RoomScreen(props) {
  const { offerData, doFetchOfferData } = props;
  const { offer, nearby } = offerData;
  const { id } = useParams();
  const [ activeOfferId, setActiveOfferId ] = useState(0);

  useEffect(() => {
    if (offerData.id !== Number(id))
    {
      doFetchOfferData(id);
    }
  }, [doFetchOfferData, id, offerData]);

  return offerData.id === Number(id) ? (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <Room />
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
  ) : (
    <span>Загружаем предложение...</span>
  );
}

RoomScreen.propTypes = {
  offerData: offerDataProp,
  doFetchOfferData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offerData: state.offerData,
});

const mapDispatchToProps = (dispatch) => ({
  doFetchOfferData(id) {
    dispatch(fetchOfferData(id));
  },
});

export { RoomScreen };
export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen);
