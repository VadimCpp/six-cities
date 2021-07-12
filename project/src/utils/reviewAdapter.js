import UserAdapter from './userAdapter';

const ReviewAdapter = {
  getReview: (comment) => ({
    ...comment,
    user: UserAdapter.getUser(comment['user']),
  }),
  getReviews: (comments) => comments.map((comment) => ReviewAdapter.getReview(comment)),
};

export default ReviewAdapter;
