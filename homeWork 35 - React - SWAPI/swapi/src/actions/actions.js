import {getSwapiData} from "../swapi-api";

export const fetchData = (endpoint) => async (dispatch) => {
    try {
        const response = await getSwapiData(endpoint);
        if (response.status === 'success') {
            dispatch(fetchDataSuccess(response));
        } else {
            dispatch(fetchDataFailure(response.error));
        }
    } catch (error) {
        dispatch(fetchDataFailure(error.message));
    }
};

export const clearData = () => {
    return {
        type: 'CLEAR_DATA',
    };
};

const fetchDataSuccess = (data) => {
    return {
        type: 'FETCH_DATA_SUCCESS',
        payload: data,
    };
};

const fetchDataFailure = (error) => {
    return {
        type: 'FETCH_DATA_FAILURE',
        payload: error,
    };
};
