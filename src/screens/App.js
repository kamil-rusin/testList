import React, { useEffect } from 'react';
import PicturesListContainer from '../components/PicturesListContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WebContent from '../components/WebContent';
import QRScannerScreen from './QRScannerScreen';
import SplashScreen from 'react-native-splash-screen';

const MainAppScreen = ({ navigation }) => {
    return <PicturesListContainer nav={navigation} />;
};

const WebContentScreen = ({ navigation, route }) => {
    const { url } = route.params;

    return <WebContent pageUrl={url} navigation={navigation} />;
};

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
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
