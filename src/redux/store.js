import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import listsReducer from './listsReducer';
import cardsReducer from './cardsReducer';
import columnsReducer from './columnsReducer';
import modifyStringReducer from './modifyStringReducer';

const subreducers = {
    lists: listsReducer,
    columns: columnsReducer,
    cards: cardsReducer,
    searchString: modifyStringReducer
};
  
const reducer = combineReducers(subreducers);

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;   