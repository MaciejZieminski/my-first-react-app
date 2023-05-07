import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import { useDispatch } from 'react-redux';

const ColumnForm = (props) => {
    
    const [value, setValue] = useState('');
    const [icon, setIcon] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADD_COLUMN', payload: { value, icon }})
        setValue('');
        setIcon('');
    }



    return (
      <form className={styles.columnForm} onSubmit={handleSubmit}>
                <span>Title:</span> <TextInput type="text" value={value} onChange={e => setValue(e.target.value)}/>
                <span>Icon:</span> <TextInput type="text" icon={icon} onChange={e => setIcon(e.target.iconValue)}/>
                <Button>Add column</Button>
      </form>
    );
}

export default ColumnForm;