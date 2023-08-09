import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import React from "react";
import {Navigate} from "react-router-dom";


const Dialogs = (props) => {
   const state = props.dialogsPage

   const dialogElement = state.dialogs.map(d => <DialogsItem key={d.id} name={d.name} id={d.id}/>)

   const messagesElement = state.messages.map(m => <Message key={m.id} message={m.message}/>)

   const newMassageText = state.newMessageText;

   const onSendMessage = () => {

      props.onSendMessage()
   }
   const onNewMassageChange = (e) => {
      const newMessageText = e.target.value;
      props.onNewMassageChange(newMessageText)
   }
   if(!props.isAuth) return <Navigate to={'/login'}/>

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItem}>

            {dialogElement}

         </div>
         <div className={s.message}>
            <div> {messagesElement} </div>

            <div><textarea onChange={onNewMassageChange} value={newMassageText}
                           placeholder='Enter your message'></textarea></div>
            <div>
               <button onClick={onSendMessage}>Send</button>
            </div>
         </div>

      </div>
   )
}

export default Dialogs;