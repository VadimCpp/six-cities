import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import offersProp from '../offers/offers.prop';

function App({offers}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainScreen offers={offers}/>
        </Route>
        <Route path="/login" exact component={LoginScreen} />
        <Route path="/favorites" exact>
          <FavoritesScreen offers={offers}/>
        </Route>
        <Route path="/offer/:id" exact render={(routeProps) => {
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
