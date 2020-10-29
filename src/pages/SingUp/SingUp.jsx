import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../Login/login.scss';

import api from '../../services/api'

export default () => {

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [birthdate, setBirthdate] = useState("")
	const [gender, setGender] = useState("")
	const [country, setCountry] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")

	const signUp = (e) => {
		e.preventDefault();

		api.post("user/sign-up", {

			name, email, password, country, gender, birthdate

		}).then(response => {
			console.log(response);
		})

	}

	return (
		<section className="login">
			<div className="login__container">
				<figure className="login__logo">
					<img src="/src/assets/images/icons/cday.svg" alt="logo cday" />
				</figure>
				<h1 className="login__title">Listening anytime, anywhere</h1>
				<h4 className="login__secondary-title">The artists we represent are one of the most successful in Romania and also were a huge breakthrough.</h4>
				<div className="user">
					<article className="login__form">
						<h3 className="login__form__title">Welcome to cday The best music online</h3>
						<h4 className="login__form__secondary-title">Subcribe to our page, is free!</h4>
						<form onSubmitCapture={(e) => { signUp(e) }} className="forminfo">
							<input value={name} onChange={(e) => { setName(e.target.value) }} type="text" className="form__name" required placeholder="Your name" />
							<input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" className="form__mail" required placeholder="Your e-mail" />
							<div className="form__separator"></div>
							<label>your Birthdate:</label>
							<input value={birthdate} onChange={(e) => { setBirthdate(e.target.value) }} type="date" />
							<select value={gender} onChange={(e) => { setGender(e.target.value) }} name="Gender">
								<option value="Gender">Gender:</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
							<select value={country} onChange={(e) => { setCountry(e.target.value) }} name="Country">
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
							<input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" required placeholder="create password" />
							<input value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} type="password" required placeholder="confirm password" />
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
					<div className="user__image">
						<img src="/src/assets/images/icons/user.svg" alt="user" />
					</div>
				</div>
			</div>
		</section>
	)
}

