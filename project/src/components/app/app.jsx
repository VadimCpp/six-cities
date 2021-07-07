import React from 'react';
import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

function App() {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.ROOT} exact component={MainScreen} />
        <Route path={AppRoute.LOGIN} exact component={LoginScreen} />
        <Route path={AppRoute.ROOM} exact component={RoomScreen} />
        <PrivateRoute path={AppRoute.FAVORITES} exact render={() => <FavoritesScreen />} />
        <Route component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export { App };
export default App;
