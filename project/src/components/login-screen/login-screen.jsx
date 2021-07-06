import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { redirectToRoute, setCity } from '../../store/action';
import { login } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-data/selector';

function LoginScreen(props) {
  const { onSubmit, authorizationStatus, doRedirectToRoute, doSetCity } = props;
  const loginRef = useRef();
  const passwordRef = useRef();

  //
  // NOTE!
  // Если пользователь авторизован, то при переходе на страницу LoginScreen
  // выполняется перенаправление на главную страницу.
  //
  if (authorizationStatus === AuthorizationStatus.AUTH) {
    doRedirectToRoute(AppRoute.ROOT);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.ROOT}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to={AppRoute.LOGIN} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action=""
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="text"
                  name="email"
                  placeholder="Email"
                  id="email"
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <span
                className="locations__item-link"
                style={{ cursor: 'pointer' }}
                onClick={(evt) => {
                  evt.preventDefault();
                  doSetCity('Amsterdam');
                  doRedirectToRoute(AppRoute.ROOT);
                }}
              >
                Amsterdam
              </span>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

LoginScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  doRedirectToRoute: PropTypes.func.isRequired,
  doSetCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
  doRedirectToRoute(route) {
    dispatch(redirectToRoute(route));
  },
  doSetCity(city) {
    dispatch(setCity(city));
  },
});

export { LoginScreen };
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
