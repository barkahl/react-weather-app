import {FETCH_WEATHER, FETCH_SUCCESS} from '../Constants/Actions';

const initialState = {
    loading: false,
    error: false,
    location: {},
    weather: {},
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
                weather: payload.current,
                location: payload.location,
            };
        default:
            return state;
    }
};

export { initialState };
export default reducer;
