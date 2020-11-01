import React, { useState, useEffect, useContext } from 'react';
import FullWidthBanner from '../../components/FullWidthBanner/FullWidthBanner'
import '../Login/login.scss'
import './FinishSingUp.scss'
import api from "../../services/api"
import Store from "../../store/index"


const FinishSingUp = () => {
    const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [birthdate, setBirthdate] = useState("")
    const [gender, setGender] = useState("")
    const [country, setCountry] = useState("")
    const [image, setImage] = useState("")

    const signUp = (e) => {
		e.preventDefault();

		api.post("user/sign-up", {

			name, email, country, gender, birthdate, image

		}).then(response => {
			console.log(response);
		})

	}
    return (
    <>
    <div className="container-fluid">
        <div className="container-flex">
            <FullWidthBanner/>
                <section className="googlesingup" >
                    <div className="googlesingup__section">
                        <h1>To finish your registration, please, give us this information</h1>
                        <div className="googlesingup__register">
                            <form className="forminfo" onSubmit={signUp}>
                                <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" className="form__name" required placeholder="Your name"/>
                                <input value={email} onChange={(e) => { setEmail(e.target.value) }}  type="email" className="form__mail" required placeholder="Your e-mail"/>
                                <div className="form__separator"></div>
                                <label>your Birthday:</label>
                                <input value={birthdate} onChange={(e) => { setBirthdate(e.target.value) }}  type="date" required/>
                                <select value={gender} onChange={(e) => { setGender(e.target.value) }}  name="Gender" required>
                                    <option value="Gender">Gender:</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                <select  value={country} onChange={(e) => { setCountry(e.target.value) }}  name="Country" required>
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
                                <button>SING UP</button>
                            </form>
                            <div className="googlesingup__photo">
                                    <div className="ooglesingup__photo__editicon">
                                        <img src="/src/assets/images/icons/user-edit.svg"/>
                                    </div>
                                    <div className="googlesingup__photo__picture">
                                        photo
                                    </div>
                                    <div>
                                        <span>
                                            <input id="uploadfile" type="file" value={image} onChange={(e) => { setImage(e.target.value) }} required/>
                                        </span>
                                        <label htmlFor="uploadfile">
                                            UPLOAD IMAGE
                                        </label>
                                    </div>
                                    
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
    )
}

export default FinishSingUp
