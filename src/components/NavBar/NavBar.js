import styles from './NavBar.module.scss';
import 'font-awesome/css/font-awesome.min.css';

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <div className={styles.navWrapper}>
                <a href="/">
                    <span className="fa fa-th-list"></span>
                </a>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/favourite">Favourite</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
export default NavBar;