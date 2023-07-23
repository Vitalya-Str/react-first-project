const add_Posts = 'ADD-POSTS';
const update_Post_Change = 'UPDATE-POST-CHANGE';

const initialState = {
   posts: [
      {id: 1, message: 'Hello', likeCounts: '1'},
      {id: 2, message: 'Hello World', likeCounts: '22'}
   ],
   newPostText: '',
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
         ...state,
         newPostText: action.newText,
      }
   }
   return state

}

export const addPostsActionCreator = () => ({type: add_Posts})
export const updatePostChangeCreator = (text) => {

   return {
      type: update_Post_Change,
      newText: text
   };
}
export default profileReducer;