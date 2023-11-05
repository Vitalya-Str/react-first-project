import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
   const path = 'dialogs/' + props.id;
   return (
      <div className={s.dialog + '' + s.active}>
         <NavLink to={path}> {props.name} </NavLink>
      </div>
   )
}


export default DialogsItem;