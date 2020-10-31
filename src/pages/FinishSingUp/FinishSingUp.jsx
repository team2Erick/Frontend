import React from 'react';
import FullWidthBanner from '../../components/FullWidthBanner/FullWidthBanner';
import '../Login/Login';
import './FinishSingUp.scss';

const FinishSingUp = () => (
  <>
    <div className="container-fluid">
      <div className="container-flex">
        <FullWidthBanner />
        <section className="googlesingup">
          <div className="googlesingup__section">
            <h1>
              To finish your registration, please, give us this information
            </h1>
            <div className="googlesingup__register">
              <form className="forminfo">
                <input
                  type="text"
                  className="form__name"
                  required
                  placeholder="Your name"
                />
                <input
                  type="email"
                  className="form__mail"
                  required
                  placeholder="Your e-mail"
                />
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
                  <option value="United States of America">
                    United States of America
                  </option>
                  <option value="Canada">Canada</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Peru">Peru</option>
                  <option value="Brazil">Brazil</option>
                  <option value="China">China</option>
                </select>
                <button>SING UP</button>
              </form>

              <div className="googlesingup__photo">
                <div className="ooglesingup__photo__editicon">
                  <img src="/src/assets/images/icons/user-edit.svg" />
                </div>
                <div className="googlesingup__photo__picture">photo</div>
                <div className="googlesingup__photo__info">
                  <h2>Your name</h2>
                  <h2>email@gmail.com</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </>
);

export default FinishSingUp;
