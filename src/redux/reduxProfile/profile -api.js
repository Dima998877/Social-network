import instance from '../../API/Api'

const profileAPI = {
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
export default profileAPI