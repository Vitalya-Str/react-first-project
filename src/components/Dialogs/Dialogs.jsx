import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../FormControl/FormControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const Dialogs = (props) => {
   const state = props.dialogsPage

   const dialogElement = state.dialogs.map(d => <DialogsItem key={d.id} name={d.name} id={d.id}/>)

   const messagesElement = state.messages.map(m => <Message key={m.id} message={m.message}/>)

   const addSendMessage = (values) => {
      props.onSendMessage(values.newSendMessageBody)
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItem}>
            {dialogElement}
         </div>
         <div className={s.message}>
            <div> {messagesElement} </div>
            <AddMessageFormRedux onSubmit={addSendMessage}/>
         </div>
      </div>
   )
}

const maxLength30 = maxLengthCreator(30)
const AddMessageForm = (props) => {

   return (
      <form onSubmit={props.handleSubmit}>
         <Field component={Textarea} validate={[required, maxLength30]} name='newSendMessageBody'
                placeholder='Enter your message'/>
         <div>
            <button>Send</button>
         </div>
      </form>

   )
}

const AddMessageFormRedux = reduxForm({form: 'AddMessageDialogs'})(AddMessageForm)

export default Dialogs;