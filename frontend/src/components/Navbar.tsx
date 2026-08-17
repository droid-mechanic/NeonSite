import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"

function Navbar() {
    return (
        <div className={styles.Root}>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/slider">Slider Demo</NavLink>
        </nav>
        </div>
    )
}

export default Navbar