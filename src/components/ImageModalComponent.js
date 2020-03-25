import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { PinchGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const ImageModalComponent = (props) => {
    const { imageUrl } = props;
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

    return (
        <View style={styles.container}>
            <View style={styles.modalContent}>
                <PinchGestureHandler onGestureEvent={onZoomEvent}>
                    <Animated.Image
                        style={[styles.image, { transform: [{ scale: scale }] }]}
                        source={{ uri: imageUrl }}
                        resizeMode='contain'
                    />
                </PinchGestureHandler>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: width - 45,
        height: 300,
        borderRadius: 10,
    },
});

export default ImageModalComponent;
