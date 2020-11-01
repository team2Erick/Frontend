import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.scss';

import Store from '../../store';

import api from '../../services/api';

const Login = () => {
  const { state, setState } = useContext(Store);
  const history = useHistory();

  useEffect(() => {
    if (state.user.id) history.push('/');
  }, []);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginQuery = (e) => {
    e.preventDefault();

    api
      .post('auth/login', {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <section className="loginpage">
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
              <input type="email" required placeholder="Email" />
              <input type="password" required placeholder="Password" />
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

export default Login;
