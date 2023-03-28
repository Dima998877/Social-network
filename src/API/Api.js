import Axios from 'axios';

const instance = Axios.create({
   withCredentials: true,
   headers: { 'API-KEY': '0c3ac84b-f72f-426a-89b3-3c5bf477590c' },
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
export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/${userId}`).then(response => response.data)
   },
   getProfileStatus(userId){
      return instance.get(`profile/status/${userId}`).then(response => response.data)
   },
   updateProfileStatus(status){
      return instance.put(`profile/status/`, {status: status}).then(response => response.data)     
   },
   updatePhoto(photoFile){
      let formData = new FormData();
      formData.append('image', photoFile)
      return instance.put('/profile/photo/', formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
       }).then(response => response.data)
   },
   saveProfileData(profile){
      return instance.put(`profile`, profile).then(response => response.data)     
   }
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
