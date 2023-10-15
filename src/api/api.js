import axios from "axios";


const instance = axios.create({
   baseURL: `https://social-network.samuraijs.com/api/1.0/`,
   withCredentials: true,
   headers: {
      "API-KEY": "d523b7cb-c64a-4ba9-be46-aedea47a9708",
   },
})


export const usersAPI = {

   getUsers(currentPage, pageSize) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
         return response.data
      })

   },

   follow(userID) {
      return instance.post(`follow/${userID}`)
   },

   unfollow(userID) {
      return instance.delete(`follow/${userID}`)
   },

   getProfile(userId) {

      console.warn('Obsolete method. Please userAPI object')

      return profileAPI.getProfile(userId)
   },


}

export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/` + userId)
   },
   setStatus(userId) {
      return instance.get(`profile/status/` + userId)
   },
   updateStatus(status) {
      return instance.put(`profile/status/`, {status: status})
   }
}

export const authAPI = {
   getHeader() {
      return instance.get(`auth/me`)
   },
   login(email, password, rememberMe = false) {
      return instance.post(`auth/login`, {email, password, rememberMe})
   },
   logout() {
      return instance.delete(`auth/login`)
   },
}
