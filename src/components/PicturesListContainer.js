import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PicturesListComponent from './PicturesListComponent';
import fetchDataAction from '../redux/actions/fetchData';
import filterDataAction from '../redux/actions/filterData';
import TextFilterElement from './TextFilterElement';

const getSearchKey = (state) => state.listReducer.searchKey;
const getDataToFilter = (state) => state.listReducer.data;
const getListData = (state) => state.listReducer.filteredData;
const getListPending = (state) => state.listReducer.pending;
const getListError = (state) => state.listReducer.error;

const useMountEffect = (fun) => useEffect(fun, []);

const PictureListContainer = (props) => {
    const [sort, setSort] = useState(false);
    const searchKey = useSelector(getSearchKey);
    const dataToFilter = useSelector(getDataToFilter);
    const listData = useSelector(getListData);
    const listPending = useSelector(getListPending);
    const listError = useSelector(getListError);
    const dispatch = useDispatch();

    const handleChange = (text) => {
        dispatch(filterDataAction(text, dataToFilter));
    };

    const fetchData = () => {
        dispatch(fetchDataAction());
    };

    useMountEffect(fetchData);

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
            <TextFilterElement searchKey={searchKey} handleChange={handleChange} />
            <PicturesListComponent
                fetchData={fetchData}
                sortDataByParam={(arg) => sortDataByParam(arg)}
                handleSort={() => setSort(!sort)}
                data={listData}
                error={listError}
                pending={listPending}
                loadInBrowser={loadInBrowser}
            />
        </>
    );
};

export default PictureListContainer;
