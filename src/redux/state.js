const add_Posts = 'ADD-POSTS';
const update_Post_Change = 'UPDATE-POST-CHANGE';
const add_Message = 'ADD_MESSAGE';
const Update_Message_Change = 'UPDATE-MESSAGE-CHANGE';

const store = {

   _state: {
      profilePage: {
         posts: [
            {id: 1, message: 'Hello', likeCounts: '1'},
            {id: 2, message: 'Hello World', likeCounts: '22'}
         ],
         newPostText: '',
      },

      dialogsPage: {
         messages: [
            {id:1, message: 'Hello Wold!',},
            {id:2, message: 'How old are you?',},
            {id:3, message: 'What is your name?',},
            {id:4, message: 'YO!'}
         ],
         dialogs: [
            {id: '1', name: 'Kama'},
            {id: '2', name: 'Julia'},
            {id: '3', name: 'Artem'},
            {id: '4', name: 'Vitalya'}
         ],
         newMessageText: '',
      },
      sidebar: {
         friends: [
            {name: 'Julia'},
            {name: 'Artem'},
            {name: 'Vitalya'}
         ]
      },


   },
   _callSubscriber() {
      console.log('State change');
   },
   getState() {
      return this._state
   },
   subscribe(observer) {
      store._callSubscriber = observer;
   },

   dispatch(action) {
      if (action.type === add_Posts) {

         const post = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likeCounts: '0'
         }

         this._state.profilePage.posts.push(post)
         this._state.profilePage.newPostText = ''
         store._callSubscriber(this._state);

      } else if (action.type === update_Post_Change) {
         this._state.profilePage.newPostText = action.newText;
         store._callSubscriber(this._state);

      } else if (action.type === add_Message) {
         const newMessage = this._state.dialogsPage.newMessageText;

         this._state.dialogsPage.newMessageText = "";
         this._state.dialogsPage.messages.push({id:5, message: newMessage})
         store._callSubscriber(this._state);

      } else if (action.type === Update_Message_Change) {
         this._state.dialogsPage.newMessageText = action.newTextMessage;
         store._callSubscriber(this._state);
      }
   }
}

export const addPostsActionCreator = () => ({type: add_Posts})
export const updatePostChangeActionCreator = (text) => {

   return {
      type: update_Post_Change,
      newText: text
   };
}
export const updateMessageChangeActionCreator = (text) => {

   return {
      type: Update_Message_Change,
      newTextMessage: text
   };
}

export const addMessageActionCreator = () => {

   return {
      type: add_Message
   };
}

export default store;