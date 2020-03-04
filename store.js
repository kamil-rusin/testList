import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import listReducer from './reducers/listReducer';


const rootReducer = combineReducers({
  listReducer: listReducer,
});

const middleware=[thunk];

const configureStore = () => createStore(rootReducer,applyMiddleware(...middleware));

export default configureStore;
