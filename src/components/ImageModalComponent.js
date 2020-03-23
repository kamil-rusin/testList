import React from 'react';
import { StyleSheet, View, Modal, Image, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const ImageModalComponent = (props) => {
    const { isOpened, url, setIsOpened } = props;

    return (
        <Modal
            visible={isOpened}
            animationType='slide'
            transparent={true}
            onRequestClose={() => setIsOpened(false)}
        >
            <View style={styles.container}>
                <View style={styles.modalContent}>
                    <MaterialCommunityIcons
                        style={styles.modalCloseIcon}
                        name='close-circle'
                        size={32}
                        onPress={() => setIsOpened(false)}
                    />
                    <Image style={styles.image} source={{ uri: url }} resizeMode='contain' />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        padding: 5,
        borderRadius: 10,
        borderColor: '#1d548b',
        borderWidth: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: width - 30,
    },
    modalCloseIcon: {
        color: '#1e89de',
        zIndex: 1,
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    image: {
        width: width - 45,
        height: 250,
        borderRadius: 10,
    },
});

export default ImageModalComponent;
