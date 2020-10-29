import axios from 'axios';

const config = new axios.create({
  baseURL: 'https://cday-music.herokuapp.com/api/',
});

export default config;
