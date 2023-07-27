const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_NUMBER_PAGE = 'SET_NUMBER_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

const initialState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
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
   }
   return state

}

export const followAC = (userID) => ({type: FOLLOW, userID})
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setNumberPageAC = (currentPage) => ({type: SET_NUMBER_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export default usersReducer;