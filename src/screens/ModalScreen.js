import React from 'react';
import ImageModalComponent from '../components/ImageModalComponent';
import { safeAreaViewStyle } from '../styles/styles';
import { SafeAreaView } from 'react-native';

const ModalScreen = ({ route }) => {
    const { url } = route.params;

    return (
        <SafeAreaView style={safeAreaViewStyle.container}>
            <ImageModalComponent imageUrl={url} />
        </SafeAreaView>
    );
};

export default ModalScreen;
