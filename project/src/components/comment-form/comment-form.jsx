import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { postComment } from '../../store/api-actions';
import Rating from '../rating/rating';

function CommentForm(props) {
  const { authorizationStatus, offerId, doPostComment } = props;

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  if (authorizationStatus !== AuthorizationStatus.AUTH) {
    return null;
  }

  const isSubmitAvailable = rating >= 1 && rating <= 5 && comment.length >= 50 && comment.length <= 300;

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    doPostComment({id: offerId, rating: rating, comment}).then(() => {
      setComment('');
      setRating(0);
    });
  }

  function handleRatingChange(event) {
    setRating(Number(event.currentTarget.value));
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
          disabled={isSubmitAvailable ? '' : 'disabled'}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

CommentForm.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  offerId: PropTypes.number.isRequired,
  doPostComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  doPostComment(id) {
    return dispatch(postComment(id));
  },
});

export { CommentForm };
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
