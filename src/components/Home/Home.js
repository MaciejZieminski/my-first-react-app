import styles from './Home.module.scss';
import Hero from   '../Hero/Hero.js';
import Lists from '../Lists/Lists.js';

const Home = (props) => {
    return (
        <div>
            <Hero />
            <Lists />
        </div>
    )
}

export default Home;