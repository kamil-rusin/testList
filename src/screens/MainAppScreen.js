import React from 'react';
import { SafeAreaView } from 'react-native';
import { safeAreaViewStyle } from '../styles/safeAreaViewStyle';
import PicturesListContainer from '../components/PicturesListContainer';

const MainAppScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={safeAreaViewStyle.container}>
            <PicturesListContainer nav={navigation} />
        </SafeAreaView>
    );
};

export default MainAppScreen;
