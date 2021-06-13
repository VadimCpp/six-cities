import PropTypes from 'prop-types';

// TODO: isRequired в описании типа указывать не надо, надо указывать по месту использования
export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  preview: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}).isRequired;
