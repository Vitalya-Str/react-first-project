import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA_SUCCESS = 'SET_CAPTCHA_SUCCESS';

const initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
   captchaUrl: null
}
const authReducer = (state = initialState, action) => {

   if (action.type === SET_USER_DATA || action.type === SET_CAPTCHA_SUCCESS) {
      return {
         ...state,
         ...action.payload,
      }
   }
   return state

}

export const setAuthUserData = (userId, email, login, isAuth) => ({
   type: SET_USER_DATA,
   payload: {
      userId,
      email,
      login,
      isAuth
   }
})
export const setCaptchaSuccess = (captchaUrl) => ({
   type: SET_CAPTCHA_SUCCESS,
   payload: {
      captchaUrl
   }
})

export const getHeader = () => async (dispatch) => {
   const response = await authAPI.getHeader()

   if (response.data.resultCode === 0) {
      const {id, email, login} = response.data.data
      dispatch(setAuthUserData(id, email, login, true))
   }
}

export const login = (email, password, rememberMe, captcha ) => async (dispatch) => {
   const response = await authAPI.login(email, password, rememberMe, captcha)

   if (response.data.resultCode === 0) {
      dispatch(getHeader())
   } else {
      if(response.data.resultCode === 10){
       dispatch(getCaptchaUrl())
      }
      const messageError = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
      dispatch(stopSubmit('login', {_error: messageError}))
   }
}
export const getCaptchaUrl = () => async (dispatch) => {
   const response = await securityAPI.getCaptchaUrl()
   const captchaUrl = response.data.url
   dispatch(setCaptchaSuccess(captchaUrl))
}

export const logout = () => async (dispatch) => {
   const response = await authAPI.logout()

   if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
   }
}


export default authReducer;