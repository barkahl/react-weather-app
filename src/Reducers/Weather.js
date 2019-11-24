import {FETCH_WEATHER, FETCH_ERROR, FETCH_SUCCESS} from '../Constants/Actions';

const initialState = {
    loading: false,
    error: false,
    location: {},
    current: {},
    historical: {},
};

const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case FETCH_WEATHER:
            return {
                ...initialState,
                loading: true,
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                ...payload,
            };
        case FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error:true,
            };
        default:
            return state;
    }
};

export { initialState };
export default reducer;
