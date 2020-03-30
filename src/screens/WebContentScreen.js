import React from 'react';
import { SafeAreaView } from 'react-native';
import { safeAreaViewStyle } from '../styles/styles';
import WebContent from '../components/WebContent';

const WebContentScreen = ({ navigation, route }) => {
    const { url } = route.params;

    return (
        <SafeAreaView style={safeAreaViewStyle.container}>
            <WebContent pageUrl={url} navigation={navigation} />
        </SafeAreaView>
    );
};

export default WebContentScreen;
