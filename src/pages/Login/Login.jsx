import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Cockies from 'js-cookie';

import Successful from '../../components/Successful/Successful';
import api from '../../services/api';
import Store from '../../store';
import './Login.scss';

export default () => {
  const history = useHistory();
  const { state, setState } = useContext(Store);
  const [showSuccess, setShowSuccess] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (state.user.id) history.push('/');
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginQuery = async (e) => {
    e.preventDefault();

    const response = await api.post(
      'auth/login',
      {},
      {
        auth: {
          username: email,
          password: password,
        },
      }
    );

    if (response.data.error) {
      setMessage(response.data.error);
      setShowSuccess(true);
      return;
    }

    Cockies.set('token', response.data.data.token);

    setMessage('Welcome to CDay, have a good day ;)');
    setShowSuccess(true);

    const decoded = response.data.data.token;
    const jwt = jwt_decode(decoded);
    const data = { ...jwt, id: jwt.sub };

    window.sessionStorage.setItem('cday_user', JSON.stringify(decoded));
    // localStorage.setItem('cday_user', JSON.stringify(decoded));
    setState('user', data);

    setTimeout(() => {
      history.push('/');
    }, 2000);
  };

  return (
    <section className="loginpage">
      {showSuccess && (
        <Successful
          success={message}
          close={() => {
            setShowSuccess(false);
          }}
        />
      )}
      <div className="loginpage__container">
        <div className="presentation">
          <figure className="loginpage__logo">
            <img src="/src/assets/images/icons/cday.svg" alt="logo cday" />
          </figure>
          <h1 className="loginpage__title">
            Listening and watching anytime, anywhere
          </h1>
          <h4 className="loginpage__secondary-title">
            The artists we represent are one of the most successful in Romania
            and also were a huge breakthrough.
          </h4>
          <div className="cel">
            <img src="/src/assets/images/icons/user.svg" alt="user" />
          </div>
        </div>
        <div className="user">
          <article className="loginpage__form">
            <h3 className="loginpage__form__titleform">
              Welcome to cday The best music online
            </h3>
            <h4 className="loginpage__form__secondary-titleform">
              Subcribe to our page, is free!
            </h4>

            <form onSubmit={loginQuery} className="forminfo">
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                required
                placeholder="Email"
              />
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                required
                placeholder="Password"
              />
              <div className="forminfo__separator"></div>
              <button type="submit">LOG IN</button>
            </form>

            <h4>
              Don´t have an acount? create one{' '}
              <span>
                <Link to="/signup">Sing up</Link>
              </span>
            </h4>
            <div className="inscription">
              <button>
                <img
                  src="/src/assets/images/icons/google-icon.svg"
                  alt="logo google"
                />
                <span>LOG IN WITH GOOGLE</span>
              </button>
              <button>
                <img
                  src="/src/assets/images/icons/facebook-icon.svg"
                  alt="logo facebook"
                />
                <span>LOG IN WITH FACEBOOK</span>
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
