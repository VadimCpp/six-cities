import UserAdapter from './userAdapter';

const ReviewAdapter = {
  getReview: (review) => ({
    ...review,
    user: UserAdapter.getUser(review['user']),
  }),
  getReviews: (reviews) => reviews.map((review) => ReviewAdapter.getReview(review)),
};

export default ReviewAdapter;
