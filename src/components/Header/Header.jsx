import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
   return <header className={s.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png" alt="logo"/>

      <div className={s.headerLogin}>
         {
            props.isAuth ?
               <div>{props.login} - <button onClick={props.logout}>Log out</button></div> :
               <NavLink to={'login/'}>Login</NavLink>
         }
      </div>

   </header>
}

export default Header