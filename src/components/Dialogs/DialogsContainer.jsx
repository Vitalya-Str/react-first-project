import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import React from "react";
import {addMessageCreator, updateMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
   const state = props.store.getState().dialogsPage;
   const onSendMessage = () => {
      props.store.dispatch(addMessageCreator())
   };
   const onNewMassageChange = (newMessageText) => {

      props.store.dispatch(updateMessageCreator(newMessageText))
   };

   return (
      <Dialogs onNewMassageChange={onNewMassageChange} onSendMessage={onSendMessage} dialogsPage={state}/>
   )
}

export default DialogsContainer;