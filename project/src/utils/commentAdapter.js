import UserAdapter from '../utils/userAdapter';

const CommentAdapter = {
  getComment: (comment) => ({
    ...comment,
    user: UserAdapter.getUser(comment['user']),
  }),
  getComments: (comments) => comments.map((comment) => CommentAdapter.getComment(comment)),
};

export default CommentAdapter;
