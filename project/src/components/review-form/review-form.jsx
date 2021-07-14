import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { postComment } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-data/selector';
import Rating from '../rating/rating';

function ReviewForm({ offerId }) {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [isPostingComment, setIsPostingComment] = useState(false);

  if (authorizationStatus !== AuthorizationStatus.AUTH) {
    return null;
  }

  const isSubmitAvailable = rating >= 1 && rating <= 5 && comment.length >= 50 && comment.length <= 300;

  function handleCommentChange(event) {
    if (!isPostingComment) {
      setComment(event.target.value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!isPostingComment) {
      setIsPostingComment(true);
      dispatch(postComment({id: offerId, rating: rating, comment})).then(() => {
        setComment('');
        setRating(0);
        setIsPostingComment(false);
      });
    }
  }

  function handleRatingChange(event) {
    if (!isPostingComment) {
      setRating(Number(event.currentTarget.value));
    }
  }

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <Rating onRatingChange={handleRatingChange} rating={rating} />
      <textarea
        className="reviews__textarea form__textarea"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleCommentChange}
        disabled={isPostingComment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount"> 50 </b>
          characters and less than
          <b className="reviews__text-amount"> 300 </b>
          characters.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isPostingComment && isSubmitAvailable ? '' : 'disabled'}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  offerId: PropTypes.number.isRequired,
};

export { ReviewForm };
export default ReviewForm;
