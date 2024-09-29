import { Link } from "react-router-dom";
import { IMAGE_PATH } from "../../constants/images";
import nav from './navbar.module.css'

function Navbar() {
    return ( 
        <nav className={nav.nav}>
                <Link to={"/home"} className={nav.logo_container}>
                <img src={IMAGE_PATH.logo} alt="Burjfood Logo" width={100}/>
                <h1 className={nav.brand}>Burjfood</h1>
                </Link>

            <ul className={nav.list_container}>
            <Link to={"/home"} className={nav.link_ref}>Home</Link>
                <Link to={"/about"} className={nav.link_ref}>About</Link>
                <Link to={"/hours"} className={nav.link_ref}>Hours & Location</Link>
                <Link to={"/menu"} className={nav.link_ref}>Menú</Link>
            </ul>
            <div className={nav.but_container}>
                <button className={nav.button}>Reservation</button>
            </div>
        </nav>
     );
}

export default Navbar;