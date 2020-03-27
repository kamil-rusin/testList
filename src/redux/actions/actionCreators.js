import {
    FETCH_DATA_ERROR,
    FETCH_DATA_PENDING,
    FETCH_DATA_SUCCESS,
    FILTER_DATA,
    UPDATE_IS_GRID_ENABLED,
    UPDATE_SEARCH_KEY,
} from './types';

export const fetchDataPending = () => {
    return {
        type: FETCH_DATA_PENDING,
    };
};

export const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        data: data,
    };
};

export const fetchDataError = (error) => {
    return {
        type: FETCH_DATA_ERROR,
        error: error,
    };
};

export const updateFilteredData = (data) => {
    return {
        type: FILTER_DATA,
        data: data,
    };
};

export const updateSearchKey = (key) => {
    return {
        type: UPDATE_SEARCH_KEY,
        searchKey: key,
    };
};

export const updateIsGridEnabled = (value) => {
    return {
        type: UPDATE_IS_GRID_ENABLED,
        isGridEnabled: value,
    };
};
