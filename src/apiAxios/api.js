import Axios from 'axios';

const instance = Axios.create({
  withCredentials: true,
  headers: process.env.REACT_APP_API_KEY,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export default instance;
