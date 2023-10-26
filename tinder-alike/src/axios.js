import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-alike-backend-a411f507cd3a.herokuapp.com'
})

export default instance;