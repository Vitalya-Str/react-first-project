import s from './Navbar.module.css'

const Navbar = ()=>{
    return <nav className={s.nav}>
        <div> <a>Profile</a></div>
        <div> <a>Massages</a></div>
        <div> <a>News</a></div>
        <div> <a>Music</a></div>
        <div> <a>Setting</a></div>
    </nav>
}

export default Navbar