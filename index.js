/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './src/screens/App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';

import configureStore from './src/redux/store';
import React from 'react';

const store = configureStore();

const persistedStore = persistStore(store);

const TestList = () => (
    <Provider store={store}>
        <PersistGate persistor={persistedStore} loading={null}>
            <App />
        </PersistGate>
    </Provider>
);

AppRegistry.registerComponent(appName, () => TestList);
