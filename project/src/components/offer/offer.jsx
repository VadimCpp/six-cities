import React from 'react';
import { Link, generatePath } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppRoute, RATING_TO_PERCENT } from '../../const';
import offerProp from '../../types/offer.prop';

function Offer({ offer, onMouseEnter, onMouseLeave, fromFavoriteScreen, placeCardClass = '', imageWrapperClass = '' }) {
  const {id, preview, price, rating, title, type, isPremium} = offer;
  // TODO: заменить fromFavoriteScreen параметрами классов
  const cardClass = `${placeCardClass} cities__place-card`;
  const imageWrapClass = `${imageWrapperClass} cities__image-wrapper`;

  const imgWidth = fromFavoriteScreen ? '150' : '260';
  const imgHeight = fromFavoriteScreen ? '110' : '200';

  return (
    <article
      className={`${cardClass} place-card`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${imageWrapClass} place-card__image-wrapper`}>
        <Link to={generatePath(AppRoute.ROOM, { id })}>
          <img
            className="place-card__image"
            src={preview}
            width={imgWidth}
            height={imgHeight}
            alt="Place"
            style={{
              maxHeight: `${imgHeight}px`,
              minHeight: `${imgHeight}px`,
              objectFit: 'cover',
            }}
          />
        </Link>
      </div>
      <div className={`${fromFavoriteScreen ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">${offer.isFavorite ? 'From' : 'To '} bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * RATING_TO_PERCENT}%` }}></span>
            <span className="visually-hidden">Rating {rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.ROOM, { id })}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

Offer.propTypes = {
  offer: offerProp.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  fromFavoriteScreen: PropTypes.bool,
  placeCardClass: PropTypes.string,
  imageWrapperClass: PropTypes.string,
};

export default Offer;
