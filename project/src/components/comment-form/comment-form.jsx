import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { postComment } from '../../store/api-actions';
import CommentStar from '../comment-star/comment-start';
function CommentForm(props) {
  const { authorizationStatus, offerId, doPostComment } = props;

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const [isSubmitAvailable, setIsSubmitAvailable] = useState(false);

  useEffect(() => {
    setIsSubmitAvailable(['1', '2', '3', '4', '5'].indexOf(rating) !== -1 && comment.length >= 50 && comment.length <= 300);
  }, [comment, rating]);

  if (authorizationStatus !== AuthorizationStatus.AUTH) {
    return null;
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    doPostComment({id:offerId, rating: Number(rating), comment});
  }

  function handleRatingChange(event) {
    setRating(event.currentTarget.value);
  }

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[
          { stars: 5, title: 'perfect' },
          { stars: 4, title: 'good' },
          { stars: 3, title: 'not bad' },
          { stars: 2, title: 'badly' },
          { stars: 1, title: 'terribly' },
        ].map(({ stars, title }) => <CommentStar key={stars} stars={stars} title={title} onRatingChange={handleRatingChange} />)}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleCommentChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitAvailable ? '' : 'disabled'}>Submit</button>
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
    dispatch(postComment(id));
  },
});

export { CommentForm };
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
