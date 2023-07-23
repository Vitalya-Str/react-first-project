const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
   users: [
      {
         id: 1,
         photoUrl: 'https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg',
         followed: false,
         fullName: 'Vitalya',
         status: 'status...',
         location: {city: 'Moscow', country: 'Russia'}
      },
      {
         id: 2,
         photoUrl: 'https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg',
         followed: true,
         fullName: 'Julia',
         status: 'status 2...',
         location: {city: 'Varshava', country: 'Poland'}
      },
      {
         id: 3,
         photoUrl: 'https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg',
         followed: false,
         fullName: 'Artem',
         status: 'status 3',
         location: {city: 'Petropavlovsk', country: 'Kazakhstan'}
      },

   ],
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
         ...state,
         users: [...state.users, ...action.users]
      }
   }
   return state

}

export const followAC = (userID) => ({type: FOLLOW, userID})
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export default usersReducer;