import {
    FETCH_DATA_ERROR,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_PENDING,
    FILTER_DATA,
    UPDATE_SEARCH_KEY,
    UPDATE_IS_GRID_ENABLED,
} from '../actions/types';

const initialState = {
    pending: false,
    data: [],
    error: null,
    filteredData: [],
    searchKey: '',
    isGridEnabled: false,
};

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_PENDING:
            return {
                ...state,
                error: null,
                pending: true,
                searchKey: '',
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
                filteredData: action.data,
            };
        case FETCH_DATA_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            };
        case UPDATE_SEARCH_KEY:
            return {
                ...state,
                searchKey: action.searchKey,
            };
        case FILTER_DATA:
            return {
                ...state,
                filteredData: action.data,
            };
        case UPDATE_IS_GRID_ENABLED:
            return {
                ...state,
                isGridEnabled: action.isGridEnabled,
            };
        default:
            return state;
    }
};

export default listReducer;
