import React from 'react';
import {FlatList, StyleSheet, View, TouchableOpacity, Text, RefreshControl, Dimensions} from 'react-native';
import PictureItemComponent from './PictureItemComponent';
import ErrorElement from './ErrorElement';
import EmptyListComponent from './EmptyListComponent';

const PicturesListComponent = props => {
  const {pending, data, error, fetchData, sortDataByParam, loadInBrowser} = props;

  return (
    <>
      {error && <ErrorElement message={error}/>}

      <FlatList
        data={data}
        contentContainerStyle={styles.listContainer}
        renderItem={({item}) => (<PictureItemComponent loadInBrowser={loadInBrowser} item={item}/>)}
        keyExtractor={item => item.id}
        ListEmptyComponent={!pending && (<EmptyListComponent/>)}
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
  listContainer: {
    display: 'flex',
    flexGrow: 1,
  },
});

export default PicturesListComponent;
