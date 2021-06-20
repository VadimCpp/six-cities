import React from 'react';
import Review from '../review/review';
import CommentForm from '../comment-form/comment-form';

function Reviews() {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        <li className="reviews__item">
          <Review />
        </li>
      </ul>
      {/* TODO: отображать только для авторизованных пользователей */}
      <CommentForm />
    </section>
  );
}

export default Reviews;
