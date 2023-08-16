const add_Message = 'ADD_MESSAGE';

const initialState = {
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

}
const dialogsReducer = (state = initialState, action) => {

   if (action.type === add_Message) {
      const newMessage = action.newSendMessageBody;
      return {
         ...state,
         messages: [...state.messages, {id: 5, message: newMessage}]
      }
   }
   return state
}

export const addMessageCreator = (newSendMessageBody) => ({
   type: add_Message,
   newSendMessageBody
})
export default dialogsReducer;