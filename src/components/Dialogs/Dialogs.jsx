import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + '' + s.active}>
                    <NavLink to='dialogs/1'> Kama </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='dialogs/2'>Julia</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='dialogs/3'>Artem</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='dialogs/4'>Vitalya</NavLink>
                </div>
            </div>
            <div className={s.massages}>
                <div className={s.massage}>Hello Wold!</div>
                <div className={s.massage}>How old are you?</div>
                <div className={s.massage}>What is your name?</div>
            </div>

        </div>
    )
}

export default Dialogs;