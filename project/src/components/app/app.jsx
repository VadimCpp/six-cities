import React from 'react';
import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import offersProp from '../../types/offers.prop';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

function App({offers}) {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.ROOT} exact component={MainScreen} />
        <Route path={AppRoute.LOGIN} exact component={LoginScreen} />
        <PrivateRoute path={AppRoute.FAVORITES} exact render={() => (
          <FavoritesScreen offers={offers}/>
        )}
        />
        <Route path={AppRoute.ROOM} exact render={(routeProps) => {
          const { id } = routeProps.match.params;
          const offer = offers.find((o) => Number(id) === o.id);

          if (offer) {
            //
            // NOTE!
            // Я вкрячил сюда эту функцию несмотря на:
            // expect
            // "Функцию поиска объявлений неподалеку реализовывать не нужно.
            //  Используйте тестовые данные. В будущем данные об объявлениях
            //  неподалёку будут приходить с сервера."
            //
            // TODO: удалить после синхронизации с сервером, а пока пусть будет
            //
            const offersForMap = offers.reduce((accumulator, currentValue) => {
              let result = [];
              if (accumulator && accumulator.length) {
                if (offer.city.name === currentValue.city.name && accumulator.length < 3) {
                  result = [ ...accumulator, currentValue];
                }
                else
                {
                  result = [ ...accumulator ];
                }
              } else if (offer.city.name === currentValue.city.name) {
                result = [ currentValue ];
              }
              return result;
            });

            return <RoomScreen offer={offer} offersForMap={offersForMap}/>;
          }

          return <NotFoundScreen />;
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

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export { App };
export default connect(mapStateToProps)(App);
