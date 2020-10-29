import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Login.scss';

import api from "../../services/api";

const Login = () => {
  // [email, setEmail] = useState()
  // [password, setPassword] = useState()

  const loginQuery = () => {
    api.post("/auth/login", {
        email: "test",
        password: "test"
    }).then(response => {
        console.log(response);
      });
  };

  return (
    <section className="login">
      <div className="login__container">
        <figure className="login__logo">
          <img src="/src/assets/images/icons/cday.svg" alt="logo cday" />
        </figure>
        <h1 className="login__title">Listening and watching anytime, anywhere</h1>
        <h4 className="login__secondary-title">The artists we represent are one of the most successful in Romania and also were a huge breakthrough.</h4>
        <div className="user">
            <article className="login__form">
                <h3 className="login__form__titleform">Welcome to cday The best music online</h3>
                <h4 className="login__form__secondary-titleform">Subcribe to our page, is free!</h4>
                <form className="forminfo">
                    <input type="email" required placeholder="Email" />
                    <input type="password" required placeholder="Password" />
                    <div className="forminfo__separator"></div>
                    <button onClick={loginQuery}>LOG IN</button>

                </form>
                <h4>Don´t have an acount? create one <span><Link to="/singup">Sing up</Link></span></h4>
                <div className="inscription">
                    <button >
                        <img src="/src/assets/images/icons/google-icon.svg" alt="logo google" /><span>LOG IN WITH GOOGLE</span>
                    </button>
                    <button>
                        <img src="/src/assets/images/icons/facebook-icon.svg" alt="logo facebook" /><span>LOG IN WITH FACEBOOK</span>
                    </button>
                </div>

            </article>
            <div className="user__image">
                <img src="/src/assets/images/icons/user.svg" alt="user" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
