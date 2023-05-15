import styles from './Home.module.scss';
import Hero from   '../Hero/Hero.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Lists from '../Lists/Lists';

const Home = (props) => {
    return (
        <div>
            <Hero />
            <SearchForm />
            <Lists />
        </div>
    )
}

export default Home;