import s from './Navbar.module.css'

const Navbar = ()=>{
    return <nav className={s.nav}>
        <div > <a className={s.item}>Profile</a></div>
        <div className= {s.item}> <a>Massages</a></div>
        <div className= {s.item}> <a>News</a></div>
        <div className= {s.item}> <a>Music</a></div>
        <div className= {s.item}> <a>Setting</a></div>
    </nav>
}

export default Navbar