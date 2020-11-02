import axios from 'axios';

// export const apiPath = "https://cday-music.herokuapp.com/api/"
export const apiPath = "http://localhost:3000/api/"

const config = new axios.create({
  baseURL: apiPath,
});

export const file = async (endpoint, data) => {
  var formData = new FormData();

  Object.keys(data).forEach((el) => {
    console.log(el, data[el]);
    formData.append(el, data[el]);
  });

  const response = await config.post(endpoint, formData);

  return response;
};

export default config;