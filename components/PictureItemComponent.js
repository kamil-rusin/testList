import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Badge} from 'react-native-elements';
import NativeLinking from 'react-native/Libraries/Linking/NativeLinking';

const PictureItemComponent = props => {
  const loadInBrowser = () => {
    NativeLinking.openURL(props.item.url).catch(err =>
      console.error("Couldn't load page", err),
    );
  };

  return (
    <View style={styles.listItem}>
      <Image style={styles.image} source={{uri: props.item.download_url}} />
      <View style={styles.detailsContainer}>
        <View style={styles.row}>
          <Text style={styles.author}>{props.item.author}</Text>
          <Badge
            containerStyle={styles.badge}
            badgeStyle={styles.badgeStyle}
            value={props.item.id}
          />
        </View>
        <Text onPress={loadInBrowser} style={styles.website}>
          Url: {props.item.url}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1d548b',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 3,
    margin: 5,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 5,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 2,
    marginRight: 10,
  },
  image: {
    width: 80,
    height: 80,
    margin: 5,
    borderRadius: 10,
  },
  author: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  badge: {
    marginLeft: 'auto',
  },
  badgeStyle: {
    borderRadius: 35,
    width: 38,
    height: 38,
    marginBottom: 5,
  },
  website: {
    fontSize: 13,
    color: '#606060',
  },
});

export default PictureItemComponent;
