import React, {useState} from 'react';
import {WebView} from 'react-native-webview';
import {Image, Linking, StyleSheet, TouchableOpacity} from 'react-native';
import {LINK_EXTERNAL} from '../Images';

const WebContent = props => {
  const {pageUrl, navigation} = props;
  const [currentURL, setURL] = useState(pageUrl);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => {
          Linking.openURL(currentURL).catch(err =>
            console.error('Couldn\'t load page', err),
          );
        }}>
          <Image style={styles.image} source={LINK_EXTERNAL}/>
        </TouchableOpacity>
      ),
    });
  }, [navigation, currentURL]);

  return (
    <WebView
      source={{uri: pageUrl}}
      onNavigationStateChange={newNavState => setURL(newNavState.url)}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 32,
    height: 32,
    margin: 10,
  },
});

export default WebContent;
