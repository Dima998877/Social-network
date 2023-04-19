import instance from '../../apiAxios/api';

const authAPI = {
  async authMe() {
    const response = await instance.get(`auth/me`);
    return response.data;
  },
  async login(email, password, rememberMe = false, captcha = null) {
    const response = await instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
    return response.data;
  },
  async logout() {
    const response = await instance.delete(`auth/login`);
    return response.data;
  },
};
export default authAPI;
