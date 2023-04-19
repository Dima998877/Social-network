import instance from '../../apiAxios/api';

const securityAPI = {
  async getCaptcha() {
    const response = await instance.get(`security/get-captcha-url`);
    return response.data;
  },
};

export default securityAPI;
