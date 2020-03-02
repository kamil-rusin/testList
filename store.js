import {createStore, combineReducers} from 'redux';
import listReducer from './reducers/listReducer';

const rootReducer = combineReducers({
  listReducer: listReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
