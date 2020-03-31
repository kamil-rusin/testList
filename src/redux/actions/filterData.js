import { updateFilteredData, updateSearchKey } from './actionCreators';

const filterData = (searchKey, data, onlyFavourites=false, favouriteItems) => {
    return (dispatch) => {
        dispatch(updateSearchKey(searchKey));

        const results = data.filter((item) =>
            item.author.toLowerCase().includes(searchKey.toLowerCase().trim()),
        );

        if (onlyFavourites) {
            console.log('jestem tu');
            const filtered = results.filter((item) => favouriteItems.includes(item.id));
            dispatch(updateFilteredData(filtered));
        } else {
            dispatch(updateFilteredData(results));
        }
    };
};

export default filterData;
