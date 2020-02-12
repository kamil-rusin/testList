import React from 'react';
import {FlatList, ActivityIndicator, StyleSheet, View} from 'react-native';
import PictureItemComponent from './PictureItemComponent';
import {Button} from 'react-native-elements';

const PicturesListComponent = props => {
  const {isLoading, data, fetchData, sortDataByAuthor, sortDataById} = props;

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

      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            title="Refresh"
            onPress={fetchData}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            title="Sort by author"
            onPress={sortDataByAuthor}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            title="Sort by id"
            onPress={sortDataById}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#1d548b',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '8%',
  },
  buttonContainer: {
    margin: 4,
    width: '30%',
  },
  button: {
    borderRadius: 7,
  },
  buttonTitle: {
    fontSize: 13,
  },
});

export default PicturesListComponent;
