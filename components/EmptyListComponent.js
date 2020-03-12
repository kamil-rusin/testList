import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';


const EmptyListComponent = () => {
  return (
    <View style={styles.informationContainer}>
      <Image style={styles.image} source={require('../images/empty-list.png')}/>
      <Text style={styles.message}>No items available</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  informationContainer: {
    flex: 1,
    marginBottom: 3,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
    margin: 5,
  },
  image: {
    width: 81,
    height: 109,
  },
});

export default EmptyListComponent;