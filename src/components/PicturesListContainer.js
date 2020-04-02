import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PicturesListComponent from './PicturesListComponent';
import fetchDataAction from '../redux/actions/fetchData';
import filterDataAction from '../redux/actions/filterData';
import TextFilterElement from './TextFilterElement';
import { Image, TouchableOpacity } from 'react-native';
import { QR_CODE } from '../constants/Images';
import { imageStyles } from '../styles/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    updateIsGridEnabled,
    addFavouriteItem,
    removeFavouriteItem,
} from '../redux/actions/actionCreators';

const getSearchKey = (state) => state.listReducer.searchKey;
const getListData = (state) => state.listReducer.filteredData;
const getListPending = (state) => state.listReducer.pending;
const getListError = (state) => state.listReducer.error;
const getIsGridEnabled = (state) => state.listReducer.isGridEnabled;
const getFavouriteItems = (state) => state.listReducer.favouriteItems;

const PicturesListContainer = (props) => {
    const [sort, setSort] = useState(false);
    const [onlyFavourites, setOnlyFavourites] = useState(false);
    const isGridEnabled = useSelector(getIsGridEnabled);
    const searchKey = useSelector(getSearchKey);
    const listData = useSelector(getListData);
    const listPending = useSelector(getListPending);
    const listError = useSelector(getListError);
    const favouriteItems = useSelector(getFavouriteItems);
    const dispatch = useDispatch();
    const { nav } = props;

    React.useLayoutEffect(() => {
        nav.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => {
                        nav.push('QRScanner');
                    }}
                >
                    <Image style={imageStyles.headerImage} source={QR_CODE} />
                </TouchableOpacity>
            ),
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => {
                        dispatch(updateIsGridEnabled(!isGridEnabled));
                    }}
                >
                    <MaterialCommunityIcons size={32} style={imageStyles.headerImage} name='grid' />
                </TouchableOpacity>
            ),
        });
    }, [dispatch, isGridEnabled, nav]);

    const handleChange = useCallback(
        (text) => {
            dispatch(filterDataAction(text, onlyFavourites));
        },
        [dispatch, onlyFavourites],
    );

    const handleFavourites = useCallback(() => {
        dispatch(filterDataAction(searchKey, !onlyFavourites));
        setOnlyFavourites(!onlyFavourites);
    }, [dispatch, onlyFavourites, searchKey]);

    const fetchData = useCallback(() => {
        dispatch(fetchDataAction());
    }, [dispatch]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const sortDataByParam = (key) => {
        let compareValues;
        if (key === 'id') {
            compareValues = (first, second) => {
                return first.id - second.id;
            };
        } else if (key === 'author') {
            compareValues = (first, second) => {
                if (first.author > second.author) {
                    return 1;
                } else if (first.author < second.author) {
                    return -1;
                } else return first.id - second.id;
            };
        }

        listData.sort(compareValues);
    };

    const loadInBrowser = (url) => {
        nav.push('WebContent', { url: url });
    };

    const loadModal = (url) => {
        props.nav.push('Modal', { url: url });
    };

    const handleFavouriteItem = (id) => {
        favouriteItems.includes(id)
            ? dispatch(removeFavouriteItem(id))
            : dispatch(addFavouriteItem(id));
    };

    return (
        <>
            <TextFilterElement searchKey={searchKey} handleChange={handleChange} />
            <PicturesListComponent
                isGridEnabled={isGridEnabled}
                fetchData={fetchData}
                sortDataByParam={(arg) => sortDataByParam(arg)}
                handleSort={() => setSort(!sort)}
                data={listData}
                error={listError}
                pending={listPending}
                loadInBrowser={loadInBrowser}
                loadModal={loadModal}
                favouriteItems={favouriteItems}
                handleFavouriteItem={handleFavouriteItem}
                onlyFavourites={onlyFavourites}
                handleFavourites={handleFavourites}
                setOnlyFavourites={setOnlyFavourites}
            />
        </>
    );
};

export default PicturesListContainer;
