import axios from "axios";

const config = new axios.create({
    baseURL: 'https://cday-music.herokuapp.com/api/',
    // baseURL: 'http://localhost:3000/api/',
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