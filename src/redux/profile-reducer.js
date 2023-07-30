const add_Posts = 'ADD-POSTS';
const update_Post_Change = 'UPDATE-POST-CHANGE';
const SET_TOTAL_PROFILE = 'SET_TOTAL_PROFILE';

const initialState = {
   posts: [
      {id: 1, message: 'Hello', likeCounts: '1'},
      {id: 2, message: 'Hello World', likeCounts: '22'}
   ],
   newPostText: '',
   profile: null,

}
const profileReducer = (state = initialState, action) => {

   if (action.type === add_Posts) {
      return {
         ...state,
         posts: [...state.posts, {id: 3, message: state.newPostText, likeCounts: '0'}],
         newPostText: ''

      }
   } else if (action.type === update_Post_Change) {
      return {
         ...state, newPostText: action.newText,
      }
   } else if (action.type === SET_TOTAL_PROFILE){
      return {
         ...state , profile: action.profile
      }
   }
   return state

}

export const addPostsActionCreator = () => ({type: add_Posts})
export const setTotalProfile = (profile) => ({type: SET_TOTAL_PROFILE, profile })
export const updatePostChangeCreator = (text) => ({
      type: update_Post_Change,
      newText: text
})
export default profileReducer;