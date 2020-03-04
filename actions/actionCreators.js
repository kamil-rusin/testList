import {FETCH_DATA_ERROR, FETCH_DATA_PENDING, FETCH_DATA_SUCCESS} from './types';

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
