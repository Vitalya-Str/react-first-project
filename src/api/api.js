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

   post(userID) {
      return instance.post(`follow/${userID}`, {}).then(response => {
         return response.data
      })
   },

   delete(userID){
      return instance.delete(`follow/${userID}`).then(response => {
         return response.data
      })
   },

   getProfile(userId){
      return  instance.get(`profile/` + userId).then(response =>{
         return response.data
      })
   },

   getHeader(){
      return instance.get(`auth/me`).then(response=>{
         return response.data
      })
   }
}

