import React, { useRef } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const TextFilterElement = (props) => {
    const { handleChange, searchKey } = props;

    const textInput = useRef(null);

    const onCancelButtonClick = () => {
        textInput.current.blur();
    };

    const clearText = () => {
        textInput.current.clear();
        handleChange('');
    };

    const renderClearButton = () => {
        return (
            <TouchableOpacity style={styles.buttonContainer} onPress={clearText}>
                <Text style={styles.buttonTitle}>X</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.filterContainer}>
            <TextInput
                ref={textInput}
                inlineImageLeft='loupe_icon'
                inlineImagePadding={10}
                style={styles.filterInput}
                placeholder='Search name'
                value={searchKey}
                onChangeText={(text) => handleChange(text)}
            />

            {searchKey !== '' ? (
                renderClearButton()
            ) : (
                <TouchableOpacity style={styles.buttonContainer} />
            )}

            <TouchableOpacity style={styles.buttonContainer} onPress={onCancelButtonClick}>
                <Text style={styles.buttonTitle}>CANCEL</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    filterContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 3,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    filterInput: {
        height: 40,
        borderColor: '#1e89de',
        borderWidth: 1,
        borderRadius: 10,
        width: '70%',
    },
    buttonContainer: {
        margin: 10,
        minWidth: 10,
    },
    buttonTitle: {
        color: '#1e89de',
    },
});

export default TextFilterElement;
