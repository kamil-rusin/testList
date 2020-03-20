import React, { useState } from 'react';
import ProgressWebView from 'react-native-progress-webview';
import { Image, Linking, TouchableOpacity } from 'react-native';
import { LINK_EXTERNAL } from '../constants/Images';
import { imageStyles } from '../styles/imageStyles';

const WebContent = (props) => {
    const { pageUrl, navigation } = props;
    const [currentURL, setURL] = useState(pageUrl);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => {
                        Linking.openURL(currentURL).catch((err) =>
                            console.error("Couldn't load page", err),
                        );
                    }}
                >
                    <Image style={imageStyles.headerImage} source={LINK_EXTERNAL} />
                </TouchableOpacity>
            ),
        });
    }, [navigation, currentURL]);

    return (
        <ProgressWebView
            source={{ uri: pageUrl }}
            onNavigationStateChange={(newNavState) => setURL(newNavState.url)}
        />
    );
};

export default WebContent;
