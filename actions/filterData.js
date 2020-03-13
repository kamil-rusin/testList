import {updateFilteredData, updateSearchKey} from './actionCreators';

const filterData = (searchKey, data) => {
  return dispatch => {
    dispatch(updateSearchKey(searchKey));
    const results = data.filter(item =>
      item.author.toLowerCase().includes(searchKey.toLowerCase().trim()),
    );
    dispatch(updateFilteredData(results));
  };
};

export default filterData;
