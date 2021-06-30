import PropTypes from 'prop-types';
import offerProp from './offer.prop';
import offersProp from './offers.prop';
import commentsProp from './comments.prop';

export default PropTypes.shape({
  id: PropTypes.number,
  offer: offerProp,
  nearby: offersProp,
  comments: commentsProp,
});
