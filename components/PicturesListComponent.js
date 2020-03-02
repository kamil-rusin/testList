import React from 'react';
import {FlatList, ActivityIndicator, StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import PictureItemComponent from './PictureItemComponent';

const PicturesListComponent = props => {
  const {isLoading, data, fetchData, sortDataByAuthor, sortDataById, loadInBrowser} = props;

  return (
    <>
      {isLoading
        ?
        (<ActivityIndicator style={styles.indicatorContainer} size="large" color="dodgerblue" animating/>)
        :
        (<FlatList
          data={data}
          renderItem={({item}) => (<PictureItemComponent loadInBrowser={loadInBrowser} item={item}/>)}
          keyExtractor={item => item.id}
        />)
      }

      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonContainer} onPress={fetchData}>
          <Text style={styles.buttonTitle}>REFRESH</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={sortDataByAuthor}>
          <Text style={styles.buttonTitle}>SORT BY AUTHOR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={sortDataById}>
          <Text style={styles.buttonTitle}>SORT BY ID</Text>
        </TouchableOpacity>
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
    borderTopColor: '#1e89de',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '8%',
  },
  buttonContainer: {
    margin: 4,
    width: '30%',
    backgroundColor: '#1e89de',
    borderRadius: 7,
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    fontSize: 13,
    color: 'white',
  },
});

export default PicturesListComponent;
