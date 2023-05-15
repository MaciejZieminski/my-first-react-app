import styles from './NavBar.module.scss';
import 'font-awesome/css/font-awesome.min.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <div className={styles.navWrapper}>
                <a href="/">
                    <span className="fa fa-th-list"></span>
                </a>
                <ul>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favourite">Favourite</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;