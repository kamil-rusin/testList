import React from 'react';
import ImageModalComponent from '../components/ImageModalComponent';

const ModalScreen = ({ route }) => {
    const { url } = route.params;

    return <ImageModalComponent imageUrl={url} />;
};

export default ModalScreen;
