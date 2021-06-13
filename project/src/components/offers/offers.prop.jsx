import PropTypes from 'prop-types';

export default PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number.isRequired,
  preview: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
})).isRequired;
