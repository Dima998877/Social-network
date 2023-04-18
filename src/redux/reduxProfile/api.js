import instance from '../../API/Api'

const profileAPI = {
   async getProfile(userId) {
      const response = await instance.get(`profile/${userId}`)
      return response.data
   },
   async getProfileStatus(userId){
      const response = await instance.get(`profile/status/${userId}`)
      return response.data
   },
   async updateProfileStatus(status){
      const response = await instance.put(`profile/status/`, { status: status })
      return response.data     
   },
   async updatePhoto(photoFile){
      let formData = new FormData();
      formData.append('image', photoFile)
      const response = await instance.put('/profile/photo/', formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      })
      return response.data
   },
   async saveProfileData(profile){
      const response = await instance.put(`profile`, profile)
      return response.data     
   }
} 
export default profileAPI