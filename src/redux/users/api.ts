import instance from '../../apiAxios/api';

type dataType = {
  id: number;
  name: string;
  status: string;
  photos: { small: string; large: string };
  followed: boolean;
};

const usersAPI = {
  async getUsers(currentPage = 1, pageSize = 5) {
    const response = await instance.get(
      `users?page=${currentPage}&count=${pageSize}`
    );
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
};
export default usersAPI;
