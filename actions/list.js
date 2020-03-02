import {IS_FETCHING, UPDATE_LIST, SET_ERROR} from './types';

export const setError = (error) => ({
  type: SET_ERROR,
  error: error,
});

export const updateList = (data) => ({
  type: UPDATE_LIST,
  data: data,
});

export const setIsFetching = (isFetching) => ({
  type: IS_FETCHING,
  isFetching: isFetching,
});

//TODO: isFetching, updateList
