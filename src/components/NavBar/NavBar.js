import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <Container className={styles.container}>
            <i className="fa-light fa-bars-progress"><a href="/"></a></i>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/favorite">Favorite</a></li>
                <li><a href="/about">About</a></li>
            </ul>
            </Container>
        </nav>
    )
}

export default NavBar;