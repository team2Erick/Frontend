import axios from 'axios';

const config = new axios.create({
  // baseURL: 'https://cday-music.herokuapp.com/api/',
  baseURL: 'http://localhost:3000/api/',
});
export default config;
