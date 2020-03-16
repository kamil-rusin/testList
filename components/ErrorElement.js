import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ErrorElement = (props) => {
    const { message } = props;

    return (
        <View style={styles.errorContainer}>
            <Text style={styles.errorMessage}>{message.toString()}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    errorContainer: {
        borderRadius: 10,
        backgroundColor: '#cf0007',
        marginBottom: 3,
        margin: 5,
    },
    errorMessage: {
        fontSize: 13,
        color: 'white',
        margin: 5,
    },
});

export default ErrorElement;
