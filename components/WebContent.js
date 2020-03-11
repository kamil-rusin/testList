import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

const WebContent = props => {
  const {pageUrl} = props;

  return (
    <WebView
      source={{uri: pageUrl}}
    />
  );
};

export default WebContent;
