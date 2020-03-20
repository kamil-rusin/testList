import React, { useState } from 'react';
import { StyleSheet, View, Modal, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ImageModalComponent = (props) => {
    const { visible, url } = props;
    const [modalOpen, setModalOpen] = useState(visible);

    return (
        <Modal visible={modalOpen} animationType='fade'>
            <View style={styles.modalContent}>
                <MaterialIcons
                    name='close'
                    size={24}
                    style={styles.modalCloseIcon}
                    onPress={() => setModalOpen(false)}
                />
                <Text>{url}</Text>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalCloseIcon: {
        marginTop: 10,
        marginBottom: 0,
    },
});

export default ImageModalComponent;
