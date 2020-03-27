import { StyleSheet } from 'react-native';

export const safeAreaViewStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export const imageStyles = StyleSheet.create({
    headerImage: {
        width: 32,
        height: 32,
        margin: 10,
    },
});

export const determineImageStyle = (isGridEnabled, imageResolution) => {
    if (isGridEnabled) {
        return {
            margin: 5,
            borderRadius: 10,
            width: imageResolution,
            height: imageResolution,
        };
    } else {
        return {
            margin: 5,
            borderRadius: 10,
            width: 80,
            height: 80,
        };
    }
};

export const determineFlatListStyle = (isGridEnabled) => {
    if (isGridEnabled) {
        return {
            display: 'flex',
            flexGrow: 1,
            alignItems: 'center',
        };
    } else {
        return {
            display: 'flex',
            flexGrow: 1,
            alignItems: 'stretch',
        };
    }
};
