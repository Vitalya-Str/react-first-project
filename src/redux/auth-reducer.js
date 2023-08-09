import {usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
}
const authReducer = (state = initialState, action) => {

   if (action.type === SET_USER_DATA) {
      return {
         ...state,
         ...action.data,
         isAuth: true

      }
   }
   return state

}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: userId, email, login})

export const getHeader = ()=>{
   return (dispatch)=>{
      usersAPI.getHeader().then(response => {
         if (response.data.resultCode === 0) {
            const {id, email, login} = response.data.data
            dispatch( setAuthUserData(id, email, login))
         }
      })
   }
}

export default authReducer;