import PropTypes from 'prop-types';
import userProp from './user.prop';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  user: userProp.isRequired,
});
