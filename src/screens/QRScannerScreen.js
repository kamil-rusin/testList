import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { StyleSheet, View } from 'react-native';

const QRScannerScreen = ({ navigation }) => {
    return (
        <View style={styles.view}>
            <QRCodeScanner fadeIn={true} containerStyle={styles.container} />
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
