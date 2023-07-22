
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
const dialogsReducer = (state = initialState, action)=>{
   if (action.type === add_Message) {
      const stateCopy = {...state}
      stateCopy.messages = [...state.messages]
      const newMessage = stateCopy.newMessageText;
      stateCopy.newMessageText = "";
      stateCopy.messages.push({id:5, message: newMessage})
      return stateCopy
   } else if (action.type === Update_Message_Change) {
      const stateCopy = {...state}
      stateCopy.newMessageText = action.newTextMessage;
      return stateCopy
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