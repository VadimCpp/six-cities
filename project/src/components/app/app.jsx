import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

function App({places}) {
  return <Main places={places}/>;
}

App.propTypes = {
  places: PropTypes.number.isRequired,
};

export default App;
