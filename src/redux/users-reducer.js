import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_NUMBER_PAGE = 'SET_NUMBER_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const FOLLOW_PROGRESS = 'FOLLOW_PROGRESS'

const initialState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,
   followProgress: [],
}
const usersReducer = (state = initialState, action) => {

   if (action.type === FOLLOW) {
      return {
         ...state,
         users: state.users.map(u => {
            if (u.id === action.userID) {
               return {...u, followed: true}
            }
            return u
         })

      }
   } else if (action.type === UNFOLLOW) {
      return {
         ...state,
         users: state.users.map(u => {
            if (u.id === action.userID) {
               return {...u, followed: false}
            }
            return u
         })
      }
   } else if (action.type === SET_USERS) {
      return {...state, users: action.users}

   } else if (action.type === SET_NUMBER_PAGE) {
      return {...state, currentPage: action.currentPage}
   } else if (action.type === SET_TOTAL_USERS_COUNT) {
      return {...state, totalUsersCount: action.totalUsersCount}
   } else if (action.type === SET_IS_FETCHING) {
      return {...state, isFetching: action.isFetching}
   } else if (action.type === FOLLOW_PROGRESS) {
      return {
         ...state,
         followProgress: action.isFetching ?
            [...state.followProgress, action.userId]
            : state.followProgress.filter(id => id !== action.userId)
      }
   }
   return state

}

export const followAccess = (userID) => ({type: FOLLOW, userID})
export const unfollowAccess = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_NUMBER_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching})
export const toggleFollowProgress = (isFetching, userId) => ({type: FOLLOW_PROGRESS, isFetching , userId})

export const successUsers = (page, pageSize)=>{
   return (dispatch)=>{
      dispatch( setIsFetching(true))
      dispatch( setCurrentPage(page))
      usersAPI.getUsers(page, pageSize).then(data => {
         dispatch( setIsFetching(false))
         dispatch( setUsers(data.items))
         dispatch( setTotalUsersCount(data.totalCount))
      })
   }
}

export const unfollow= (userId)=>{
   return (dispatch)=>{
      dispatch( toggleFollowProgress(true, userId))
      usersAPI.unfollow(userId).then(response => {
         if (response.data.resultCode === 0) {
             dispatch( unfollowAccess(userId))
         }
         dispatch( toggleFollowProgress(false, userId))
      })
   }
}
export const follow= (userId)=>{
   return (dispatch)=>{
      dispatch( toggleFollowProgress(true, userId))
      usersAPI.follow(userId).then(response => {
         if (response.data.resultCode === 0) {
             dispatch( followAccess(userId))
         }
         dispatch( toggleFollowProgress(false, userId))
      })
   }
}


export default usersReducer;