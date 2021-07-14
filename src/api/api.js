import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '952eaf7c-5e2f-45d7-a53d-3508e1f1673c'
  }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },
}

export const authAPI = {
  getAuthUser() {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data;
      });
  }
};

export const profileAPI = {
  getUsersProfile(userId) {
    return instance.get(`profile/`+ userId)
      .then(response => {
        return response.data;
      });
  }
}

export const followAPI = {
  postFollow(id) {
    return instance.post(`follow/${id}`)
      .then(response => {
        return response.data;
      });
  },

  deleteFollow(id) {
    return instance.delete(`follow/${id}`)
      .then(response => {
        return response.data;
      });
  }
}

