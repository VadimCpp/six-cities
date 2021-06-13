import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function App({offers}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainScreen offers={offers}/>
        </Route>
        <Route path="/login" exact component={LoginScreen} />
        <Route path="/favorites" exact component={FavoritesScreen} />
        <Route path="/offer/:id" exact>
          <RoomScreen offers={offers}/>
        </Route>
        <Route component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    preview: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })),
};

export default App;
