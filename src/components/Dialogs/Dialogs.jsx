import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = 'dialogs/' + props.id;
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}> {props.message} </div>
    )
}

const Dialogs = (props) => {

    const Dialogs = [
        {id: '1', name: 'Kama'},
        {id: '2', name: 'Julia'},
        {id: '3', name: 'Artem'},
        {id: '4', name: 'Vitalya'}
    ]

    const Messages = [
        {message: 'Hello Wold!',},
        {message: 'How old are you?',},
        {message: 'What is your name?',},
        {message: 'YO!',}
    ]

    const DialogElement = Dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)

    const MessagesElement = Messages.map(m => <Message message={m.message}/>)


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