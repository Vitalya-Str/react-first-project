import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


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
            {id: 1, message: 'Hello Wold!',},
            {id: 2, message: 'How old are you?',},
            {id: 3, message: 'What is your name?',},
            {id: 4, message: 'YO!'}
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

      this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
      this._state.sidebar = sidebarReducer(this._state.sidebar, action)


      store._callSubscriber(this._state);
   }
}


export default store;