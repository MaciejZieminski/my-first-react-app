import styles from './List.module.scss';
import Column from '../Column/Column.js';
import ColumnForm from '../ColumnForm/ColumnForm.js';
import { useSelector } from 'react-redux';
import { getListById, getColumnsByList } from '../../redux/store';
import { useParams } from 'react-router';

const List = () => {
  
  const { listId } = useParams();
  const columns = useSelector(state => getColumnsByList(state, listId));
  const listData = useSelector(state => getListById(state, listId));

  return (
       <div>
        <header className={styles.header}>
            <h2 className={styles.title}>{listData.title}</h2>
        </header>
        <p className={styles.description}>{listData.description}</p>

        <section className={styles.columns}>
          {columns.map(columns => <Column key={columns.id} {...columns} />)}
        </section>
        <ColumnForm />
       </div>
    );
};

export default List;