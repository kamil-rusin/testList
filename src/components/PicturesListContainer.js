import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PicturesListComponent from './PicturesListComponent';
import fetchDataAction from '../redux/actions/fetchData';
import filterDataAction from '../redux/actions/filterData';
import TextFilterElement from './TextFilterElement';
import ImageModalComponent from './ImageModalComponent';

const getSearchKey = (state) => state.listReducer.searchKey;
const getDataToFilter = (state) => state.listReducer.data;
const getListData = (state) => state.listReducer.filteredData;
const getListPending = (state) => state.listReducer.pending;
const getListError = (state) => state.listReducer.error;

const PictureListContainer = (props) => {
    const [sort, setSort] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalUrl, setModalUrl] = useState('');
    const searchKey = useSelector(getSearchKey);
    const dataToFilter = useSelector(getDataToFilter);
    const listData = useSelector(getListData);
    const listPending = useSelector(getListPending);
    const listError = useSelector(getListError);
    const dispatch = useDispatch();

    const handleChange = useCallback(
        (text) => {
            dispatch(filterDataAction(text, dataToFilter));
        },
        [dispatch, dataToFilter],
    );

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
                return first.author > second.author ? 1 : -1;
            };
        }

        listData.sort(compareValues);
    };

    const loadInBrowser = (url) => {
        props.nav.push('WebContent', { url: url });
    };

    return (
        <>
            <ImageModalComponent isOpened={modalOpen} setIsOpened={setModalOpen} url={modalUrl} />
            <TextFilterElement searchKey={searchKey} handleChange={handleChange} />
            <PicturesListComponent
                fetchData={fetchData}
                sortDataByParam={(arg) => sortDataByParam(arg)}
                handleSort={() => setSort(!sort)}
                data={listData}
                error={listError}
                pending={listPending}
                loadInBrowser={loadInBrowser}
                setModalUrl={setModalUrl}
                setModalOpen={setModalOpen}
            />
        </>
    );
};

export default PictureListContainer;
