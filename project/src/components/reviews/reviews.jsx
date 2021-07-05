import React from 'react';
import PropTypes from 'prop-types';
import commentsProp from '../../types/comments.prop';
import Review from '../review/review';
import CommentForm from '../comment-form/comment-form';

function Reviews({ comments, offerId }) {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((comment) => (
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
  comments: commentsProp.isRequired,
  offerId: PropTypes.number.isRequired,
};

export { Reviews };
export default React.memo(Reviews);
