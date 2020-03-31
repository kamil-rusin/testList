import React, { useCallback, useMemo } from 'react';
import {
    FlatList,
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    RefreshControl,
    Dimensions,
} from 'react-native';
import PictureItemComponent from './PictureItemComponent';
import ErrorElement from './ErrorElement';
import EmptyListComponent from './EmptyListComponent';
import { determineFlatListStyle } from '../styles/styles';

const getImageResolution = () => Math.floor((Dimensions.get('screen').width - 70) / 3);

const PicturesListComponent = (props) => {
    const {
        pending,
        data,
        error,
        fetchData,
        sortDataByParam,
        loadInBrowser,
        handleSort,
        loadModal,
        isGridEnabled,
        favouriteItems,
        handleFavouriteItem,
    } = props;
    const imageResolution = useMemo(() => getImageResolution(), []);

    const renderItem = useCallback(
        ({ item }) => (
            <PictureItemComponent
                imageResolution={imageResolution}
                isGridEnabled={isGridEnabled}
                loadInBrowser={loadInBrowser}
                item={item}
                loadModal={loadModal}
                handleFavouriteItem={handleFavouriteItem}
                isFavourite={true}
                //TODO: change to isFavourite={favouriteItems.includes(item.id)}
            />
        ),
        [
            imageResolution,
            loadInBrowser,
            isGridEnabled,
            loadModal,
            handleFavouriteItem,
            favouriteItems,
        ],
    );

    return (
        <>
            {error && <ErrorElement message={error} />}

            <FlatList
                data={data}
                key={isGridEnabled}
                numColumns={isGridEnabled ? 3 : 1}
                contentContainerStyle={determineFlatListStyle(isGridEnabled)}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={!pending && <EmptyListComponent />}
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
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => {
                        sortDataByParam('author');
                        handleSort();
                    }}
                >
                    <Text style={styles.buttonTitle}>SORT BY AUTHOR</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => {
                        sortDataByParam('id');
                        handleSort();
                    }}
                >
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
});

export default PicturesListComponent;
