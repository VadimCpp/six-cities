import React from 'react';
import PropTypes from 'prop-types';
import reviewsProp from '../../types/reviews.prop';
import Review from '../review/review';
import CommentForm from '../comment-form/comment-form';

function Reviews({ reviews, offerId }) {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((comment) => (
          <li className="reviews__item" key={comment.id}>
            <Review review={comment}/>
          </li>
        ))}
      </ul>
      <CommentForm offerId={offerId} />
    </section>
  );
}

Reviews.propTypes = {
  reviews: reviewsProp.isRequired,
  offerId: PropTypes.number.isRequired,
};

export { Reviews };
export default React.memo(Reviews);
