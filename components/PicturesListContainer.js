import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import PicturesListComponent from './PicturesListComponent';
import fetchDataAction from '../actions/fetchData';
import {TextInput} from 'react-native';

const getListData = state => state.listReducer.data;
const getListPending = state => state.listReducer.pending;
const getListError = state => state.listReducer.error;

const PictureListContainer = props => {
  const [sort, setSort] = useState(false);
  const [searchKey, setSearchKey] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const listData = useSelector(getListData);
  const listPending = useSelector(getListPending);
  const listError = useSelector(getListError);
  const dispatch = useDispatch();

  const handleChange = text => {
    console.log(text);
    setSearchKey(text);
  };

  const fetchData = () => {
    dispatch(fetchDataAction());
  };

  useEffect(() => {
      fetchData();
    }, [],
  );

  useEffect(() => {
    const results = listData.filter(item =>
      item.author.toLowerCase().includes(searchKey.toLowerCase().trim()),
    );
    setSearchResults(results);
  }, [searchKey]);

  const sortDataByParam = (key) => {
    let compareValues;
    if (key === 'id') {
      compareValues = (first, second) => {
        return first.id - second.id;
      };
    } else if (key === 'author') {
      compareValues = (first, second) => {
        return (first.author > second.author) ? 1 : -1;
      };
    }

    listData.sort(compareValues);
  };

  const loadInBrowser = (url) => {
    props.nav.push('WebContent', {url: url});
  };

  return (
    <>
      <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                 placeholder="Search name"
                 value={searchKey}
                 onChangeText={text => handleChange(text)}/>
      <PicturesListComponent
        fetchData={fetchData}
        sortDataByParam={(arg) => sortDataByParam(arg)}
        handleSort={() => setSort(!sort)}
        data={searchKey ? searchResults : listData}
        error={listError}
        pending={listPending}
        loadInBrowser={loadInBrowser}
      />
    </>
  );
};


export default PictureListContainer;
