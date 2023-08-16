import {profileAPI, usersAPI} from "../api/api";
const add_Posts = 'ADD-POSTS';
const SET_TOTAL_PROFILE = 'SET_TOTAL_PROFILE';
const SET_STATUS = 'SET_STATUS';

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
   }
   return state
}

export const addPostsActionCreator = (newPostElement) => ({type: add_Posts, newPostElement})
export const setTotalProfile = (profile) => ({type: SET_TOTAL_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const getProfile = (userId) => {
   return (dispatch) => {
      usersAPI.getProfile(userId).then(response => {
         dispatch(setTotalProfile(response.data))
      })
   }
}

export const getStatus = (userId) => {
   return (dispatch) => {
      profileAPI.setStatus(userId).then(response => {
         dispatch(setStatus(response.data))
      })
   }
}
export const updateStatus = (status) => {
   return (dispatch) => {
      profileAPI.updateStatus(status).then(response => {
         if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
         }
      })


   }
}
export default profileReducer;