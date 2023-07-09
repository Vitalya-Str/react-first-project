const store = {

   _state: {
      profilePage: {
         posts: [
            {id: 1, message: 'Hello', likeCounts: '1'},
            {id: 2, message: 'Hello World', likeCounts: '22'}
         ],
         newPostText: 'programmer',
      },

      dialogsPage: {
         messages: [
            {message: 'Hello Wold!',},
            {message: 'How old are you?',},
            {message: 'What is your name?',},
            {message: 'YO!'}
         ],
         dialogs: [
            {id: '1', name: 'Kama'},
            {id: '2', name: 'Julia'},
            {id: '3', name: 'Artem'},
            {id: '4', name: 'Vitalya'}
         ],
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
      if (action.type === 'ADD-POSTS') {
         const post = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likeCounts: '0'
         }

         this._state.profilePage.posts.push(post)
         this._state.profilePage.newPostText = ''
         store._callSubscriber(this._state);
      } else if (action.type === 'UPDATE-POST-CHANGE') {
         this._state.profilePage.newPostText = action.newText;
         store._callSubscriber(this._state);
      }

   }
}

export default store;