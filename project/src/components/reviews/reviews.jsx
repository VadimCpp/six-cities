import React from 'react';
import commentsProp from '../../types/comments.prop';
import Review from '../review/review';
import CommentForm from '../comment-form/comment-form';

function Reviews({ comments }) {
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
      {/* TODO: отображать только для авторизованных пользователей */}
      <CommentForm />
    </section>
  );
}

Reviews.propTypes = {
  comments: commentsProp.isRequired,
};

export default Reviews;
