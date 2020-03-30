import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Alert, SafeAreaView, StyleSheet, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { safeAreaViewStyle } from '../styles/styles';

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
        <SafeAreaView style={safeAreaViewStyle.container}>
            <View style={styles.view}>
                {isFocused && (
                    <QRCodeScanner
                        fadeIn={true}
                        containerStyle={styles.container}
                        reactivateTimeout={2000}
                        reactivate={true}
                        vibrate={true}
                        onRead={(e) => onSuccess(e.data)}
                    />
                )}
            </View>
        </SafeAreaView>
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
