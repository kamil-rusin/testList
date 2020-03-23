import React from 'react';
import { StyleSheet, View, Modal, Animated, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

const ImageModalComponent = (props) => {
    const { isOpened, url, setIsOpened } = props;
    const scale = new Animated.Value(1);

    const onZoomEvent = Animated.event(
        [
            {
                nativeEvent: { scale: scale },
            },
        ],
        {
            useNativeDriver: true,
        },
    );

    const onZoomStateChange = (event) => {
        console.log('onZoomStateChange');
        if (event.nativeEvent.oldState === State.ACTIVE) {
            Animated.spring(scale, {
                toValue: 1,
                useNativeDriver: true,
            }).start();
        }
    };

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
                    <PinchGestureHandler
                        onGestureEvent={onZoomEvent}
                        onHandlerStateChange={onZoomStateChange}
                    >
                        <Animated.Image
                            style={[styles.image, { transform: [{ scale: scale }] }]}
                            source={{ uri: url }}
                            resizeMode='contain'
                        />
                    </PinchGestureHandler>
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
