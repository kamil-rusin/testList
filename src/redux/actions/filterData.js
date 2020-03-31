import { updateFilteredData, updateSearchKey } from './actionCreators';

const filterData = (searchKey, data, onlyFavourites, favouriteItems) => {
    return (dispatch) => {
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
