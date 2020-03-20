import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Alert, StyleSheet, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

const QRScannerScreen = ({ navigation }) => {
    const isFocused = useIsFocused();

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
                    reactivate={isFocused}
                    vibrate={isFocused}
                    onRead={isFocused ? (e) => onSuccess(e.data) : null}
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