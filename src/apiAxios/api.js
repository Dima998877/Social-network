import Axios from 'axios';

const instance = Axios.create({
  withCredentials: true,
  headers: '0c3ac84b-f72f-426a-89b3-3c5bf477590c',
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export default instance;
