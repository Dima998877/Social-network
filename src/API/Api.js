import Axios from 'axios';

const instance = Axios.create({
   withCredentials: true,
   headers: process.env.REACT_APP_API_KEY,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})
export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 5) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => response.data)
   },
   setUnfollow(userId) {
      return instance.delete(`follow/${userId}`).then(response => response.data)
   },
   setFollow(userId) {
      return instance.post(`follow/${userId}`).then(response => response.data)
   },
} 

export const securityAPI = {
   getCaptcha() {
      return instance.get(`security/get-captcha-url`).then(response => response.data)
   }
}
export const authAPI = {
   authMe() {
      return instance.get(`auth/me`).then(response => response.data)
   },
   login(email, password, rememberMe = false, captcha = null) {
      return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then(response => response.data)
   },
   logout() {
      return instance.delete(`auth/login`).then(response => response.data)
   },
}

export default instance