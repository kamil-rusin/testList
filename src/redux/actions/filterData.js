import { updateFilteredData, updateSearchKey } from './actionCreators';

const filterData = (searchKey, onlyFavourites) => {
    return (dispatch, getState) => {
        const { data, favouriteItems } = getState().listReducer;

        dispatch(updateSearchKey(searchKey));

        const results = data.filter((item) =>
            item.author.toLowerCase().includes(searchKey.toLowerCase().trim()),
        );

        if (onlyFavourites) {
            const filtered = results.filter((item) => favouriteItems.includes(item.id));
            dispatch(updateFilteredData(filtered));
        } else {
            dispatch(updateFilteredData(results));
        }
    };
};

export default filterData;
