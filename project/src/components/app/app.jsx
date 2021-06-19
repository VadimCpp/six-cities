import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import offersProp from '../../types/offers.prop';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function App({offers}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.ROOT} exact>
          <MainScreen offers={offers}/>
        </Route>
        <Route path={AppRoute.LOGIN} exact component={LoginScreen} />
        <Route path={AppRoute.FAVORITES} exact>
          <FavoritesScreen offers={offers}/>
        </Route>
        <Route path={AppRoute.ROOM} exact render={(routeProps) => {
          const { id } = routeProps.match.params;
          const offer = offers.find((o) => Number(id) === o.id);
          return offer ? <RoomScreen offer={offer}/> : <NotFoundScreen />;
        }}
        />
        <Route component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: offersProp.isRequired,
};

export default App;
