import React, {useEffect, useState} from 'react';
import Input from "./Components/Input";
import useApi from "./Hooks/WeatherStack";

const initialLocation = {
    name: ""
};

const App = () => {
    const [location, setLocation] = useState(initialLocation);
    const [state, fetchCurrentWeather] = useApi();

    useEffect(() => {
        if (location.name) {
            fetchCurrentWeather(location);
        }
    }, [location]);

    return(
        <div>
            <Input onSelect={ value => setLocation(value || initialLocation) } />
            <p>{ state.weather.temperature }</p>
            <p>{ state.weather.weather_descriptions }</p>
        </div>
    );
};

export default App;
