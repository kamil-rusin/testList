import React from 'react';
import {FlatList, StyleSheet, View, TouchableOpacity, Text, RefreshControl} from 'react-native';
import PictureItemComponent from './PictureItemComponent';
import ErrorElement from './ErrorElement';

const PicturesListComponent = props => {
  const {pending, data, error, fetchData, sortDataByParam, loadInBrowser} = props;

  return (
    <>
      {error && <ErrorElement message={error}/>}
      <FlatList
        data={data}
        renderItem={({item}) => (<PictureItemComponent loadInBrowser={loadInBrowser} item={item}/>)}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl
            colors={['#1e89de']}
            refreshing={pending}
            onRefresh={fetchData}
            enabled={true}
          />
        }
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => sortDataByParam('author')}>
          <Text style={styles.buttonTitle}>SORT BY AUTHOR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => sortDataByParam('id')}>
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
    width: '45%',
    backgroundColor: '#1e89de',
    borderRadius: 7,
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    fontSize: 14,
    color: 'white',
  },
});

export default PicturesListComponent;
