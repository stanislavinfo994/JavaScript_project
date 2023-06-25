const initialState = {
    data: null,
    endpoint: '',
    error: null,
};
const reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                data: action.payload.data,
                endpoint: action.payload.endpoint,
                error: null,
            };
        case 'FETCH_DATA_FAILURE':
            return {
                ...state,
                data: null,
                endpoint: '',
                error: action.payload,
            };
        case 'CLEAR_DATA':
            return initialState;
        default:
            return state;
    }
};

export default reducers;
