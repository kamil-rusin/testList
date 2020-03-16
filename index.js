/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './src/screens/App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import configureStore from './src/redux/store';
import React from 'react';

const store = configureStore();

const TestList = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => TestList);
