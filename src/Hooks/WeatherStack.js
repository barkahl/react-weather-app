import { useReducer } from 'react';
import { format } from 'date-fns';
import reducer, { initialState } from '../Reducers/Weather';
import {
    FETCH_CURRENT_WEATHER_SUCCESS,
    FETCH_HISTORICAL_WEATHER_SUCCESS,
    FETCH_WEATHER,
} from '../Constants/Actions';

const DATE_FORMAT = 'yyyy-MM-dd';

const fetchCurrentWeather = async (location, dispatch) => {
    const url = `/api/current?query=${location}`;

    dispatch({ type: FETCH_WEATHER });

    try {
        const response = await fetch(url);
        const data = await response.json();

        dispatch({
            type: FETCH_CURRENT_WEATHER_SUCCESS,
            payload: {
                current: data.current,
                location: data.location,
            },
        });
    } catch (err) {
        console.log(err);
    }
};

const fetchHistoricalWeather = async (location, date, dispatch) => {
    const formattedDate = format(date, DATE_FORMAT);
    const url = `/api/historical?query=${location}&historical_date=${formattedDate}&hourly=1`;

    dispatch({ type: FETCH_WEATHER });

    try {
        const response = await fetch(url);
        const data = await response.json();

        dispatch({
            type: FETCH_HISTORICAL_WEATHER_SUCCESS,
            payload: {
                current: data.current,
                location: data.location,
                historical: data.historical[formattedDate],
            },
        });
    } catch (err) {
        console.log(err);
    }
};

const useApi = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const makeCurrentWeatherRequest = location =>
        fetchCurrentWeather(location, dispatch);
    const makeHistoricalWeatherRequest = (location, date) =>
        fetchHistoricalWeather(location, date, dispatch);

    return [state, makeCurrentWeatherRequest, makeHistoricalWeatherRequest];
};

export default useApi;
