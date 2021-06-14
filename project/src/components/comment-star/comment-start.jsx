import React from 'react';
import PropTypes from 'prop-types';

function CommentStar({stars, title, handleRatingChange}) {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={`${stars}`} id={`${stars}-stars`} type="radio" onChange={handleRatingChange} />
      <label htmlFor={`${stars}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

CommentStar.propTypes = {
  stars: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  handleRatingChange: PropTypes.func.isRequired,
};

export default CommentStar;
