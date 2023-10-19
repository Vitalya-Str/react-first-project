import {profileAPI, usersAPI} from "../api/api";

const add_Posts = 'ADD-POSTS';
const SET_TOTAL_PROFILE = 'SET_TOTAL_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

const initialState = {
   posts: [
      {id: 1, message: 'Hello', likeCounts: '1'},
      {id: 2, message: 'Hello World', likeCounts: '22'}
   ],
   profile: null,
   status: "",

}
const profileReducer = (state = initialState, action) => {

   if (action.type === add_Posts) {
      return {
         ...state,
         posts: [...state.posts, {id: 3, message: action.newPostElement, likeCounts: '0'}]
      }
   } else if (action.type === SET_TOTAL_PROFILE) {
      return {
         ...state, profile: action.profile
      }
   } else if (action.type === SET_STATUS) {
      return {
         ...state, status: action.status
      }
   } else if (action.type === SAVE_PHOTO_SUCCESS) {
      return {
         ...state, profile: {...state.profile, photos: action.photos}
      }
   }
   return state
}

export const addPostsActionCreator = (newPostElement) => ({type: add_Posts, newPostElement})
export const setTotalProfile = (profile) => ({type: SET_TOTAL_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})


export const getProfile = (userId) => async (dispatch) => {
   const response = await usersAPI.getProfile(userId)
   dispatch(setTotalProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
   const response = await profileAPI.setStatus(userId)
   dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
   const response = await profileAPI.updateStatus(status)
   if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
   }
}
export const savePhoto = (file) => async (dispatch) => {
   const response = await profileAPI.savePhoto(file)
   if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos))
   }
}
export const saveProfile = (profile) => async (dispatch,getState) => {
   const userId = getState().auth.userId
   const response = await profileAPI.saveProfile(profile)
   if (response.data.resultCode === 0) {
      dispatch(getProfile(userId))
   }
}

export default profileReducer;