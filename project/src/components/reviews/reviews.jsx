import React from 'react';
import PropTypes from 'prop-types';
import reviewsProp from '../../types/reviews.prop';
import Review from '../review/review';
import ReviewForm from '../review-form/review-form';

function Reviews({ reviews, offerId }) {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <li className="reviews__item" key={review.id}>
            <Review review={review}/>
          </li>
        ))}
      </ul>
      <ReviewForm offerId={offerId} />
    </section>
  );
}

Reviews.propTypes = {
  reviews: reviewsProp.isRequired,
  offerId: PropTypes.number.isRequired,
};

export { Reviews };
export default React.memo(Reviews);
