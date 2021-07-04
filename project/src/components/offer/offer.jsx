import React from 'react';
import { Link, generatePath } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AppRoute, RATING_TO_PERCENT } from '../../const';
import offerProp from '../../types/offer.prop';
import { updateFavoriteStatus } from '../../store/api-actions';

function Offer(props) {
  const {
    offer,
    onMouseEnter,
    onMouseLeave,
    placeCardClass = '',
    imageWrapperClass = '',
    placeCardInfoClass = '',
    imgWidth = '260',
    imgHeight = '200',
    doUpdateFavoriteStatus,
  } = props;
  const {id, preview, price, rating, title, type, isPremium} = offer;

  function handleFavoriteClick() {
    doUpdateFavoriteStatus({ id, status: offer.isFavorite ? 0 : 1 });
  }

  return (
    <article
      className={`${placeCardClass} place-card`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${imageWrapperClass} place-card__image-wrapper`}>
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
      <div className={`${placeCardInfoClass} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
            onClick={handleFavoriteClick}
          >
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
  placeCardClass: PropTypes.string,
  imageWrapperClass: PropTypes.string,
  placeCardInfoClass: PropTypes.string,
  imgHeight: PropTypes.string,
  imgWidth: PropTypes.string,
  doUpdateFavoriteStatus: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  doUpdateFavoriteStatus(id, status) {
    dispatch(updateFavoriteStatus(id, status));
  },
});

export { Offer };
export default connect(null, mapDispatchToProps)(Offer);
