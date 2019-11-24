import React, {useEffect, useState} from 'react';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {DatePicker} from "@material-ui/pickers";
import { Switch } from "@material-ui/core";
import Input from "./Components/Input";
import useApi from "./Hooks/WeatherStack";
import TemperatureChart from "./Components/TemperatureChart";
import HistoricalDataTable from "./Components/HistoricalDataTable";

const initialLocation = {
    name: ""
};

const App = () => {
    const [location, setLocation] = useState(initialLocation);
    const [isHistoricalSearchEnabled, setHistoricalSearchEnabled] = useState(false);
    const [historicalDate, setHistoricalDate] = useState(null);
    const [weather, fetchCurrentWeather, fetchHistoricalWeather] = useApi();

    useEffect(() => {
        if (location.name) {
            fetchCurrentWeather(location);
        }
    }, [location]);

    useEffect(() => {
        if (historicalDate && location.name) {
            fetchHistoricalWeather(location, historicalDate);
        }
    }, [historicalDate]);

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div>
                <Input onSelect={value => setLocation(value || initialLocation)}/>
                <Switch
                    checked={isHistoricalSearchEnabled}
                    onChange={ () => setHistoricalSearchEnabled(!isHistoricalSearchEnabled) }
                />
                { isHistoricalSearchEnabled && <DatePicker value={historicalDate} onChange={setHistoricalDate} /> }
                <p>{weather.current.temperature}</p>
                <p>{weather.current.weather_descriptions}</p>
                { weather.historical.hourly && <TemperatureChart data={weather.historical.hourly} /> }
                { weather.historical.hourly && <HistoricalDataTable data={ weather.historical.hourly }/> }
            </div>
        </MuiPickersUtilsProvider>

    );
};

export default App;
