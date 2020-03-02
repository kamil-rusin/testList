import {IS_FETCHING, UPDATE_LIST, SET_ERROR} from '../actions/types';

const initialState = {
  isFetching: false,
  data: [],
  error: null,
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case UPDATE_LIST:
      return {
        ...state,
        data: action.data,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default listReducer;
