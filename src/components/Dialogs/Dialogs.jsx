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

    let DialogsData = [
        {id: '1', name: 'Kama'},
        {id: '2', name: 'Julia'},
        {id: '3', name: 'Artem'},
        {id: '4', name: 'Vitalya'}
    ]

    let MassagesData = [
        {massage: 'Hello Wold!',},
        {massage: 'How old are you?',},
        {massage: 'What is your name?',},
        {massage: 'YO!',}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                <DialogsItem name={DialogsData[0].name} id={DialogsData[0].id}/>
                <DialogsItem name={DialogsData[1].name} id={DialogsData[1].id}/>
                <DialogsItem name={DialogsData[2].name} id={DialogsData[2].id}/>
                <DialogsItem name={DialogsData[3].name} id={DialogsData[3].id}/>


            </div>
            <div className={s.massages}>

                <Massage massage={MassagesData[0].massage}/>
                <Massage massage={MassagesData[1].massage}/>
                <Massage massage={MassagesData[2].massage}/>
                <Massage massage={MassagesData[3].massage}/>


            </div>

        </div>
    )
}

export default Dialogs;