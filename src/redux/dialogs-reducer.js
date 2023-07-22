const add_Message = 'ADD_MESSAGE';
const Update_Message_Change = 'UPDATE-MESSAGE-CHANGE';

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
   newMessageText: '',
}
const dialogsReducer = (state = initialState, action) => {

   if (action.type === add_Message) {
      const newMessage = state.newMessageText;
      return {
         ...state,
         newMessageText: "",
         messages: [...state.messages, {id: 5, message: newMessage}]
      }
   } else if (action.type === Update_Message_Change) {
      return {
         ...state,
         newMessageText: action.newTextMessage,
      }
   }
   return state
}

export const updateMessageCreator = (text) => {
   return {
      type: Update_Message_Change,
      newTextMessage: text
   };
}
export const addMessageCreator = () => {
   return {
      type: add_Message
   };
}
export default dialogsReducer;