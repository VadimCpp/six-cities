import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';

function App({places, hotels}) {
  return <MainScreen places={places} hotels={hotels}/>;
}

App.propTypes = {
  places: PropTypes.number.isRequired,
  hotels: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    preview: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })),
};

export default App;
