import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { StyleSheet, View } from 'react-native';

const QRScannerScreen = ({ navigation }) => {
    const onSuccess = (data) => {
        const regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
        let found;

        if ((found = regex.exec(data))) {
            console.log(found);
            loadInBrowser(found[0]);
        }
    };

    const loadInBrowser = (url) => {
        navigation.push('WebContent', { url: url });
    };

    return (
        <View style={styles.view}>
            <QRCodeScanner
                fadeIn={true}
                containerStyle={styles.container}
                vibrate={true}
                onRead={(e) => onSuccess(e.data)}
            />
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
