import axios from "axios";

const ApiSearch = new axios.create({
    baseURL: 'https://api.deezer.com/search?q=',
})
export default ApiSearch