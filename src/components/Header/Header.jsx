import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
   debugger
   return <header className={s.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png" alt="logo"/>

      <div className={s.headerLogin}>
         {props.isAuth ? props.login : <NavLink to={'login/'}>Login</NavLink>}
      </div>

   </header>
}

export default Header