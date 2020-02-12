import React from 'react';
import {FlatList, ActivityIndicator, StyleSheet, View} from 'react-native';
import PictureItemComponent from './PictureItemComponent';

const PicturesListComponent = props => {
  const {isLoading, data} = props;

  const renderItem = ({item}) => <PictureItemComponent item={item} />;

  return (
    <>
      {isLoading && (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator size="large" color="dodgerblue" animating />
        </View>
      )}

      {!isLoading && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PicturesListComponent;
