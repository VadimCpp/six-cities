import React from 'react';
import reviewProp from '../../types/review.prop';
import { RATING_TO_PERCENT } from '../../const';
import getVerboseDate from '../../utils/getVerboseDate';

function Review({ review }) {
  const { comment, rating, user: { avatarUrl, name }, date} = review;

  return (
    <>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt={name} />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rating * RATING_TO_PERCENT}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{getVerboseDate(date)}</time>
      </div>
    </>
  );
}

Review.propTypes = {
  review: reviewProp.isRequired,
};

export default Review;
