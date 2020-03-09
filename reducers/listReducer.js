import {FETCH_DATA_ERROR, FETCH_DATA_SUCCESS, FETCH_DATA_PENDING} from '../actions/types';

const initialState = {
  pending: false,
  data: [],
  error: null,
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_PENDING:
      return {
        ...state,
        error: null,
        pending: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default listReducer;
