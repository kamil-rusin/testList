import { fetchDataError, fetchDataPending, fetchDataSuccess } from './actionCreators';

const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchDataPending());
        fetch('https://picsum.photos/v2/list')
            .then((response) => response.json())
            .then((response) => {
                if (response.error) {
                    throw response.error;
                }
                dispatch(fetchDataSuccess(response));
                return response;
            })
            .catch((error) => {
                dispatch(fetchDataError(error));
            });
    };
};

export default fetchData;
