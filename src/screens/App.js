import React from 'react';
import PicturesListContainer from '../components/PicturesListContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WebContent from '../components/WebContent';

const MainAppScreen = ({ navigation }) => {
    return <PicturesListContainer nav={navigation} />;
};

const WebContentScreen = ({ navigation, route }) => {
    const { url } = route.params;

    return <WebContent pageUrl={url} navigation={navigation} />;
};

const Stack = createStackNavigator();

const App: () => React$Node = () => {
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
