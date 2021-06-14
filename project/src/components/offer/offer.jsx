import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import offerProp from './offer.prop';

function Offer({ offer, onMouseEnter, onMouseLeave, isActive, isFavorite}) {
  const {id, preview, price, rating, title, type, isPremium} = offer;

  if (offer.isPremium === true) {
    console.log(offer);
  }

  return (
    <article
      className={`${isFavorite ? 'favorites__card' : 'cities__place-card'} place-card`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${isFavorite ? 'favorites__image-wrapper' : 'cities__image-wrapper'} place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={preview}
            width={isFavorite ? '150' : '260'}
            height={isFavorite ? '110' : '200'}
            alt="Place"
          />
        </Link>
      </div>
      <div className={`${isFavorite ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating / 5 * 100}%` }}></span>
            <span className="visually-hidden">Rating {rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title} {isActive && '(active)'}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

Offer.propTypes = {
  offer: offerProp.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default Offer;
