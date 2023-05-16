import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch } from 'react-redux';
import { modifySearchString } from '../../redux/store';

const SearchForm = () => {
    
    const [searchString, setSearchString] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(modifySearchString({searchString}));
        setSearchString('');
    }
    
    return (
        <form className={styles.SearchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={searchString} onChange = {e => setSearchString(e.target.value)} type="text"/>
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;