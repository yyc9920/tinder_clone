import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend-kendrick.herokuapp.com',
});

export default instance;