import React from 'react';
import { Link } from "react-router-dom";
import './SingUp.scss';

const SingUp = () => (
    <section className="singup">
        <div className="singup__container">
            <div className="presentationsingup">
                <figure className="singup__logo">
                    <img src="/src/assets/images/icons/cday.svg" alt="logo cday" />
                </figure>
                <h1 className="singup__title">Listening anytime, anywhere</h1>
                <h4 className="singup__secondary-title">The artists we represent are one of the most successful in Romania and also were a huge breakthrough.</h4>
                <div className="imagesingup">
                    <img src="/src/assets/images/icons/user.svg" alt="user" />
                </div>
            </div>
            <div className="user">
                <article className="singup__form">
                    <h3 className="singup__form__title">Welcome to cday The best music online</h3>
                    <h4 className="singup__form__secondary-title">Subcribe to our page, is free!</h4>
                    <form className="forminfo">
                        <input type="text" className="form__name" required placeholder="Your name" />
                        <input type="email" className="form__mail" required placeholder="Your e-mail" />
                        <div className="form__separator"></div>
                        <label>your Birthday:</label>
                        <input type="date" />
                        <select name="Gender">
                            <option value="Gender">Gender:</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <select name="Country">
                            <option value="Gender">Country:</option>
                            <option value="United States of America">United States of America</option>
                            <option value="Canada">Canada</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Peru">Peru</option>
                            <option value="Brazil">Brazil</option>
                            <option value="China">China</option>
                        </select>
                        <input type="password" required placeholder="create password" />
                        <input type="password" required placeholder="confirm password" />
                        <button>SING UP</button>
                    </form>
                    <h4>Already have an acount?<span><Link to="/login">Log in</Link></span></h4>
                    <div className="inscription">
                        <Link to="/finishsingup">
                            <button >
                                <img src="/src/assets/images/icons/google-icon.svg" alt="logo google" /><span>SING UP WITH GOOGLE</span>
                            </button>
                        </Link>
                        <Link to="/finishsingup">
                            <button>
                                <img src="/src/assets/images/icons/facebook-icon.svg" alt="logo facebook" /><span>SING UP WITH FACEBOOK</span>
                            </button>
                        </Link>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default SingUp;
