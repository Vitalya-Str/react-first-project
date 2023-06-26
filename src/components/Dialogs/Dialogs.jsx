import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {


   const DialogElement = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)

   const MessagesElement = props.messages.map(m => <Message message={m.message}/>)


   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItem}>

            {DialogElement}

         </div>
         <div className={s.message}>

            {MessagesElement}

         </div>

      </div>
   )
}

export default Dialogs;