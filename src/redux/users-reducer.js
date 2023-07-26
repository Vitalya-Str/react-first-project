const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 20,


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
      return {
         ...state.users, users: action.users
      }
   }
   return state

}

export const followAC = (userID) => ({type: FOLLOW, userID})
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export default usersReducer;