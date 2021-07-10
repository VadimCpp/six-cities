import PropTypes from 'prop-types';
import cityProp from './city.prop';
import locationProp from './location.prop';
import userProp from './user.prop';
import commentsProp from './comments.prop';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  preview: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: cityProp.isRequired,
  host: userProp.isRequired,
  description: PropTypes.string.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string.isRequired),
  bedrooms: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired),
  isPremium: PropTypes.bool.isRequired,
  location: locationProp.isRequired,
  nearby: PropTypes.arrayOf(PropTypes.number.isRequired),
  comments: commentsProp,
});
