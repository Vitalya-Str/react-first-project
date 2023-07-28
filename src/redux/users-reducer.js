const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_NUMBER_PAGE = 'SET_NUMBER_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_IS_FETCHING = 'SET_IS_FETCHING'

const initialState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,
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
   }
   return state

}

export const follow = (userID) => ({type: FOLLOW, userID})
export const unfollow = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_NUMBER_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching})
export default usersReducer;