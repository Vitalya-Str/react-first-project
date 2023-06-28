import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import React from "react";


const Dialogs = (props) => {

   const dialogElement = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)

   const messagesElement = props.messages.map(m => <Message message={m.message}/>)

   const newMessageElement = React.createRef();

   const addMessage = () => {
      const text = newMessageElement.current.value;
      alert(text)
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItem}>

            {dialogElement}

         </div>
         <div className={s.message}>

            {messagesElement}

            <div>
               <textarea ref={newMessageElement}></textarea>
            </div>
            <div>
               <button onClick={addMessage}>Add message</button>
            </div>

         </div>

      </div>
   )
}

export default Dialogs;