import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import Jwt_Decode from 'jwt-decode';
// import Cockies from 'js-cookie';

import Successful from '../../components/Successful/Successful';
import { apiPath, file } from '../../services/api';
import Store from '../../store';
import User from '../../assets/images/icons/user.svg'
import Logo from '../../assets/images/icons/cday.svg'

import './SingUp.scss';

export default () => {
	const { state, setState } = useContext(Store);
	const history = useHistory();

	useEffect(() => {
		if (state.user.id) history.push('/');
	}, []);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [birthdate, setBirthdate] = useState('');
	const [gender, setGender] = useState('');
	const [country, setCountry] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [image, setImage] = useState('');
	const [showSuccess, setShowSuccess] = useState(false);
	const [message, setMessage] = useState('');

	const [loading, setLoading] = useState(false);

	const signUp = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			setMessage('Both passwords must be equal');
			setShowSuccess(true);
			return;
		}

		setLoading(true);

		const data = {
			name,
			email,
			password,
			country,
			gender,
			birthdate,
			image,
		};

		// var signupQuery

		file('user/sign-up', data)
			.then((response) => {
				if (response.data.error) {
					setMessage(response.data.error);
					setShowSuccess(true);
					return;
				}

				setMessage(response.data.data.System);
				setShowSuccess(true);

				setTimeout(() => {
					setLoading(false);

					history.push('/login');
				}, 1000);
			})
			.catch(() => {
				setMessage('Ha ocurrido un error inesperado');
				setShowSuccess(true);
				setLoading(false);
			});
	};

	const updateImage = (e) => {
		setImage(e.target.files[0]);
	};

	const handleGoogle = async () => {
		history.push('/');
	};

	return (
		<section className="singup">
			{showSuccess && (
				<Successful
					success={message}
					close={() => {
						setShowSuccess(false);
					}}
				/>
			)}
			<div className="singup__container">
				<div className="presentationsingup">
					<figure className="singup__logo">
						<img src={Logo} alt="logo cday" />
					</figure>
					<h1 className="singup__title">New day, new Music</h1>
					<div className="imagesingup">
						<img src={User} alt="user" />
					</div>
				</div>
				<div className="user">
					<article className="singup__form">
						<h3 className="singup__form__title">
							Welcome to cday The best music online
            </h3>
						<h4 className="singup__form__secondary-title">
							Subcribe to our page, is free!
            </h4>
						<form onSubmit={signUp} className="forminfo">
							<input
								value={name}
								onChange={(e) => {
									setName(e.target.value);
								}}
								type="text"
								className="form__name"
								required
								placeholder="Your name"
							/>
							<input
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								type="email"
								className="form__mail"
								required
								placeholder="Your e-mail"
							/>
							<div className="form__separator"></div>
							<label>your Birthdate:</label>
							<input
								value={birthdate}
								onChange={(e) => {
									setBirthdate(e.target.value);
								}}
								type="date"
							/>
							<select
								value={gender}
								onChange={(e) => {
									setGender(e.target.value);
								}}
								name="Gender"
							>
								<option value="Gender">Gender:</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
							<select
								value={country}
								onChange={(e) => {
									setCountry(e.target.value);
								}}
								name="Country"
							>
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
							<input
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								type="password"
								required
								placeholder="create password"
							/>
							<input
								value={confirmPassword}
								onChange={(e) => {
									setConfirmPassword(e.target.value);
								}}
								type="password"
								required
								placeholder="confirm password"
							/>
							<span>
								<input
									id="uploadfile"
									type="file"
									onChange={updateImage}
									required
								/>
							</span>
							<label class="button" htmlFor="uploadfile">
								PICK IMAGE
              </label>
							<button type="submit">SING UP</button>
						</form>
						<h4>
							Already have an acount?
              <span>
								<Link to="/login">Log in</Link>
							</span>
						</h4>
					</article>
				</div>
			</div>
		</section>
	);
};
