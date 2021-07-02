import React from 'react';
import PropTypes from 'prop-types';
import CommentStar from '../comment-star/comment-start';

function Rating({ onRatingChange, rating }) {
  return (
    <div className="reviews__rating-form form__rating">
      {[
        { stars: 5, title: 'perfect' },
        { stars: 4, title: 'good' },
        { stars: 3, title: 'not bad' },
        { stars: 2, title: 'badly' },
        { stars: 1, title: 'terribly' },
      ].map(({ stars, title }) => <CommentStar key={stars} stars={stars} title={title} onRatingChange={onRatingChange} rating={rating} />)}
    </div>
  );
}

Rating.propTypes = {
  onRatingChange: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Rating;
