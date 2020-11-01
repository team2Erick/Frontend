import axios from 'axios';

<<<<<<< HEAD
 export const apiPath = "https://cday-music.herokuapp.com/api/"
 //export const apiPath = "http://localhost:3000/api/"
=======
export const apiPath = "https://cday-music.herokuapp.com/api/"
//  export const apiPath = "http://localhost:3000/api/"
>>>>>>> 3bf109ca566f96bdddf98853598c6d651d70ea5a

const config = new axios.create({
    baseURL: apiPath,
})

export const file = async (endpoint, data) => {

    var formData = new FormData();

    Object.keys(data).forEach((el) => {
        console.log(el, data[el]);
        formData.append(el, data[el]);
    })

    const response = await config.post(endpoint, formData);

    return response;

}

export default config
