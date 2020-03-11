import React from 'react';
import {WebView} from 'react-native-webview';
import {Image, Linking, ProgressBarAndroid, StyleSheet, TouchableOpacity} from 'react-native';
import {LINK_EXTERNAL} from '../Images';

const WebContent = props => {
  const {pageUrl, navigation} = props;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => {
          Linking.openURL(pageUrl).catch(err =>
            console.error('Couldn\'t load page', err),
          );
        }}>
          <Image style={styles.image} source={LINK_EXTERNAL}/>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <WebView renderLoading={<ProgressBarAndroid styleAttr="Horizontal" color="black"/>}
      source={{uri: pageUrl}}
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
