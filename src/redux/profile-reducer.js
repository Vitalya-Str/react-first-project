const add_Posts = 'ADD-POSTS';
const update_Post_Change = 'UPDATE-POST-CHANGE';

const profileReducer = (state, action) => {

   if (action.type === add_Posts) {
      const post = {
         id: 3,
         message: state.newPostText,
         likeCounts: '0'
      }
      state.posts.push(post)
      state.newPostText = ''

   } else if (action.type === update_Post_Change) {
      state.newPostText = action.newText;
   }
   return state
}

export const addPostsActionCreator = () => ({type: add_Posts})
export const updatePostChangeActionCreator = (text) => {

   return {
      type: update_Post_Change,
      newText: text
   };
}
export default profileReducer;