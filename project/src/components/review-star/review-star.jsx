import React from 'react';
import PropTypes from 'prop-types';

function ReviewStar({ stars, title, onRatingChange, isChecked }) {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={stars}
        id={`${stars}-stars`}
        type="radio"
        checked={isChecked}
        onChange={onRatingChange}
      />
      <label htmlFor={`${stars}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

ReviewStar.propTypes = {
  stars: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

export default ReviewStar;
