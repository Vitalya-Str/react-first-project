import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import React from "react";
import {addMessageActionCreator, updateMessageChangeActionCreator} from "../../redux/state";


const Dialogs = (props) => {
   const state = props.store.getState().dialogsPage;

   const dialogElement = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)

   const messagesElement = state.messages.map(m => <Message message={m.message}/>)

   const newMassageText = state.newMessageText;

   const onSendMessage = () => {
      props.dispatch(addMessageActionCreator())
   };
   const onNewMassageChange = (e) => {
      const newMessageText = e.target.value;
      props.dispatch(updateMessageChangeActionCreator(newMessageText))
   };

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItem}>

            {dialogElement}

         </div>
         <div className={s.message}>
            <div> {messagesElement} </div>

            <div><textarea onChange={onNewMassageChange} value={newMassageText} placeholder='Enter your message'></textarea></div>
            <div>
               <button onClick={onSendMessage}>Send</button>
            </div>

         </div>

      </div>
   )
}

export default Dialogs;