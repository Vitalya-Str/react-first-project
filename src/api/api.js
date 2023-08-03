import axios from "axios";


const instance = axios.create({
   baseURL: `https://social-network.samuraijs.com/api/1.0/`,
   withCredentials: true
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

   unfollow(userID){
      return instance.delete(`follow/${userID}`)
   },

   getProfile(userId){
      return  instance.get(`profile/` + userId)
   },

   getHeader(){
      return instance.get(`auth/me`)
   }
}

