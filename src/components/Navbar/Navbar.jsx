import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const setActive = (navData) => navData.isActive ? s.active : "";


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className={setActive}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={setActive}>Massages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={setActive}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={setActive}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/setting' className={setActive}>Setting</NavLink>
            </div>
        </nav>
    )
}

export default Navbar