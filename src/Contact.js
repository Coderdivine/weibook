import axios from 'axios';

export const Axios = axios.create({
    baseURL:"https://emailsonboard.herokuapp.com/",
});