import axios from 'axios'

const instance = axios.create({
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
   authentification() {
      return instance.get(`auth/me`)
         .then(response => response.data)
   }
}    
