import styles from './List.module.scss';
import Column from '../Column/Column.js';
import ColumnForm from '../ColumnForm/ColumnForm.js';
import SearchForm from '../SearchForm/SearchForm.js';
import { useSelector } from 'react-redux';
import { getListById } from '../../redux/listsReducer';
import { getColumnsByList } from '../../redux/columnsReducer'
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';

const List = () => {
  
  const { listId } = useParams();
  const columns = useSelector(state => getColumnsByList(state, listId));
  const listData = useSelector(state => getListById(state, listId));

  if (!listData) return <Navigate to="/" />;
  return (
       <div>
        <header className={styles.header}>
            <h2 className={styles.title}>{listData.title}</h2>
        </header>
        <p className={styles.description}>{listData.description}</p>
        <SearchForm />
        <section className={styles.columns}>
          {columns.map(columns => <Column key={columns.id} {...columns} />)}
        </section>
        <ColumnForm listId={listId}/>
       </div>
    );
};

export default List;