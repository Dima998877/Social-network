import Axios from 'axios';

const instance = Axios.create({
   withCredentials: true,
   headers: process.env.REACT_APP_API_KEY,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})
export const usersAPI = {
   async getUsers(currentPage = 1, pageSize = 5) {
      const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
      return response.data;
   },
   async setUnfollow(userId) {
      const response = await instance.delete(`follow/${userId}`);
      return response.data;
   },
   async setFollow(userId) {
      const response = await instance.post(`follow/${userId}`);
      return response.data;
   },
} 

export const securityAPI = {
   async getCaptcha() {
      const response = await instance.get(`security/get-captcha-url`);
      return response.data;
   }
}


export default instance