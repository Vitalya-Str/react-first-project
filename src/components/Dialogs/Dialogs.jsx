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

const Massage = (props) => {
    return (
        <div className={s.massage}> {props.massage} </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                <DialogsItem name='Kama' id='1'/>
                <DialogsItem name='Julia' id='2'/>
                <DialogsItem name='Artem' id='3'/>
                <DialogsItem name='Vitalya' id='4'/>

            </div>
            <div className={s.massages}>

                <Massage massage='Hello Wold!'/>
                <Massage massage='How old are you?'/>
                <Massage massage='What is your name?'/>
                <Massage massage='YO!'/>


            </div>

        </div>
    )
}

export default Dialogs;