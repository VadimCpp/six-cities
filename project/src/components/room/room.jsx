import React from 'react';
import { connect } from 'react-redux';
import offerDataProp from '../../types/offerData.prop';
import getVerboseType from '../../utils/getVerboseType';
import { RATING_TO_PERCENT } from '../../const';
import Reviews from '../reviews/reviews';
import Host from '../host/host';

function Room(props) {
  const { offerData } = props;
  const { offer, comments } = offerData;

  return (
    <>
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {offer.images.map((image) => (
            <div className="property__image-wrapper" key={image}>
              <img className="property__image" src={image} alt="Studio" />
            </div>
          ))}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {offer.isPremium && (
            <div className="property__mark">
              <span>Premium</span>
            </div>
          )}
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {offer.title}
            </h1>
            <button className="property__bookmark-button button" type="button">
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xlinkto="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{ width: `${offer.rating * RATING_TO_PERCENT}%` }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{offer.rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {getVerboseType(offer.type)}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {offer.bedrooms} Bedrooms
            </li>
            <li className="property__feature property__feature--adults">
              Max {offer.maxAdults} adults
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{offer.price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {offer.goods.map((good) => (
                <li className="property__inside-item" key={good}>
                  {good}
                </li>
              ))}
            </ul>
          </div>
          <Host user={offer.host} />
          <div className="property__description">
            <p className="property__text">
              {offer.description}
            </p>
          </div>
          <Reviews comments={comments} offerId={offer.id} />
        </div>
      </div>
    </>
  );
}

Room.propTypes = {
  offerData: offerDataProp,
};

const mapStateToProps = (state) => ({
  offerData: state.offerData,
});

export { Room };
export default connect(mapStateToProps)(Room);
