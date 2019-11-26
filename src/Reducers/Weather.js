import {
    FETCH_WEATHER,
    FETCH_ERROR,
    FETCH_CURRENT_WEATHER_SUCCESS,
    FETCH_HISTORICAL_WEATHER_SUCCESS,
} from '../Constants/Actions';

const initialState = {
    loading: false,
    error: false,
    location: null,
    current: null,
    historical: null,
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case FETCH_WEATHER:
            return {
                ...initialState,
                loading: true,
            };
        case FETCH_CURRENT_WEATHER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                current: payload.current,
                location: payload.location,
            };
        case FETCH_HISTORICAL_WEATHER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                current: payload.current,
                historical: payload.historical,
                location: payload.location,
            };
        case FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};

export { initialState };
export default reducer;
