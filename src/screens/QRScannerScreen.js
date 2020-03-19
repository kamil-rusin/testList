import React, { useEffect, useState } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Alert, StyleSheet, View } from 'react-native';

const QRScannerScreen = ({ navigation }) => {
    const [reactivate, setReactivate] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setReactivate(true);
            setIsFocused(true);
        });

        return unsubscribe;
    }, [navigation]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            setReactivate(false);
            setIsFocused(false);
        });

        return unsubscribe;
    }, [navigation]);

    const onSuccess = (data) => {
        const regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
        let found;

        if ((found = regex.exec(data))) {
            loadInBrowser(found[0]);
        } else {
            showInvalidCodeAlert();
        }
    };

    const loadInBrowser = (url) => {
        navigation.push('WebContent', { url: url });
    };

    const showInvalidCodeAlert = () => {
        Alert.alert(
            'Error',
            'Invalid url code.',
            [
                {
                    text: 'OK',
                    onPress: () => setReactivate(true),
                },
            ],
            { cancelable: false },
        );
    };

    return (
        <View style={styles.view}>
            {isFocused && (
                <QRCodeScanner
                    fadeIn={true}
                    containerStyle={styles.container}
                    reactivateTimeout={2000}
                    reactivate={reactivate}
                    vibrate={true}
                    onRead={navigation.isFocused() ? (e) => onSuccess(e.data) : null}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#ffffff',
    },
    container: {
        display: 'flex',
        flexGrow: 1,
    },
});

export default QRScannerScreen;
