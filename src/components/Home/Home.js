import Hero from   '../Hero/Hero.js';
import Lists from '../Lists/Lists.js';
import ListForm from '../ListForm/Listform';

const Home = (props) => {
    return (
        <div>
            <Hero />
            <Lists />
            <ListForm />
        </div>
    )
}

export default Home;