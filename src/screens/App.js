import React, { useEffect } from 'react';
import PicturesListContainer from '../components/PicturesListContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WebContent from '../components/WebContent';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaView } from 'react-native';
import { safeAreaViewStyle } from '../styles/safeAreaViewStyle';

const MainAppScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={safeAreaViewStyle.container}>
            <PicturesListContainer nav={navigation} />
        </SafeAreaView>
    );
};

const WebContentScreen = ({ navigation, route }) => {
    const { url } = route.params;

    return (
        <SafeAreaView style={safeAreaViewStyle.container}>
            <WebContent pageUrl={url} navigation={navigation} />
        </SafeAreaView>
    );
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
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
