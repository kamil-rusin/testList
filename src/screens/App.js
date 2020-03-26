import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QRScannerScreen from './QRScannerScreen';
import SplashScreen from 'react-native-splash-screen';
import WebContentScreen from './WebContentScreen';
import MainAppScreen from './MainAppScreen';
import ModalScreen from './ModalScreen';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='MainApp' component={MainAppScreen} />
                <Stack.Screen name='WebContent' component={WebContentScreen} />
                <Stack.Screen name='QRScanner' component={QRScannerScreen} />
                <Stack.Screen name='Modal' component={ModalScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
