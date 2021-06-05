import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function App({places, hotels}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainScreen places={places} hotels={hotels}/>
        </Route>
        <Route path="/login" exact components={LoginScreen} />
        <Route path="/favorites" exact component={FavoritesScreen} />
        <Route path="/offer/:id" exact component={RoomScreen} />
        <Route component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>
  );
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
