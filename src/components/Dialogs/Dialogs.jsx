import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

   const dialogElement = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)

   const messagesElement = props.messages.map(m => <Message message={m.message}/>)


   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItem}>

            {dialogElement}

         </div>
         <div className={s.message}>

            {messagesElement}

         </div>

      </div>
   )
}

export default Dialogs;