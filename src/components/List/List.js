import styles from './List.module.scss';
import Column from '../Column/Column.js';
import ColumnForm from '../ColumnForm/ColumnForm.js';
import { useSelector } from 'react-redux';
import { getAllColumns } from '../../redux/store';

const List = () => {
  
  const columns = useSelector(getAllColumns); 

  return (
       <div className={styles.List}>
        <header className={styles.header}>
            <h2 className={styles.title}>Things to do<span>soon</span></h2>
        </header>
        <p className={styles.description}>Interesting things I want to check out</p>

        <section className={styles.columns}>
          {columns.map(columns => <Column key={columns.id} {...columns} />)}
        </section>
        <ColumnForm />
       </div>
    );
};

export default List;