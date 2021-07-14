import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '952eaf7c-5e2f-45d7-a53d-3508e1f1673c'
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  }
}

// export const meAPI = {
//   getUsers(currentPage = 1, pageSize = 10) {
//     return instance.get(`auth/me`)
//       .then(response => {
//         return response.data;
//       });
//   }
// }
