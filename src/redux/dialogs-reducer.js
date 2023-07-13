
const add_Message = 'ADD_MESSAGE';
const Update_Message_Change = 'UPDATE-MESSAGE-CHANGE';

const dialogsReducer = (state, action)=>{
   if (action.type === add_Message) {
      const newMessage = state.newMessageText;

      state.newMessageText = "";
      state.messages.push({id:5, message: newMessage})


   } else if (action.type === Update_Message_Change) {
      state.newMessageText = action.newTextMessage;

   }
   return state
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
export default dialogsReducer;