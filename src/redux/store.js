import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

import listReducer from './reducers/listReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['listReducer'],
};

const rootReducer = combineReducers({
    listReducer: listReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

const configureStore = () => createStore(persistedReducer, applyMiddleware(...middleware));

export default configureStore;
