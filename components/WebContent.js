import React, {Component} from 'react';
import { WebView } from 'react-native-webview';

class WebContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {pageUrl} = this.props;

    return (
      <WebView
        source={{ uri: pageUrl }}
        style={{ marginTop: 5 }}
      />
    );
  }
}

export default WebContent;
