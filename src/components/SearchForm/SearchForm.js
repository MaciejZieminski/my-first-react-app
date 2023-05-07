import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch } from 'react-redux';

const SearchForm = () => {
    
    const [filterString, setFilterString] = '';
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'MODIFY_FILTERSTRING', payload: {filterString}})
    }
    
    return (
        <form className={styles.SearchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." filterString={filterString} onSubmit = {e => setFilterString(e.target.value)}/>
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;