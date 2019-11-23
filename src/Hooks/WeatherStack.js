import React, {useReducer} from 'react';
import reducer, {initialState} from "../Reducers/Weather";
import {FETCH_SUCCESS, FETCH_WEATHER} from "../Constants/Actions";

const fetchWeather = async (location, dispatch) => {
    let url = `/api/current?query=${location.name}`;

    dispatch({type: FETCH_WEATHER});

    try {
        const response = await fetch(url);
        const data = await response.json();

        dispatch({
            type: FETCH_SUCCESS,
            payload: data,
        });
    } catch (err) {
        console.log(err);
    }
};

const useApi = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const makeRequest = location => fetchWeather(location, dispatch);

    return [state, makeRequest];
};

export default useApi;
