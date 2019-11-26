import React, {useEffect, useState} from 'react';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {DatePicker} from "@material-ui/pickers";
import { Switch } from "@material-ui/core";
import Input from "./Components/Input/Input";
import useApi from "./Hooks/WeatherStack";
import TemperatureChart from "./Components/TemperatureChart/TemperatureChart";
import HistoricalDataTable from "./Components/HistoricalDataTable/HistoricalDataTable";
import styles from './App.scss';
import WeatherStatus from "./Components/WeatherStatus/WeatherStatus";

const App = () => {
    const [location, setLocation] = useState("");
    const [isHistoricalSearchEnabled, setHistoricalSearchEnabled] = useState(false);
    const [historicalDate, setHistoricalDate] = useState(null);
    const [weather, fetchCurrentWeather, fetchHistoricalWeather] = useApi();

    useEffect(() => {
        if (location) {
            fetchCurrentWeather(location);
        }
    }, [location]);

    useEffect(() => {
        if (historicalDate && location) {
            fetchHistoricalWeather(location, historicalDate);
        }
    }, [historicalDate]);

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className={styles.container}>
                <Input onSelect={value => setLocation(value || "")}/>
                { location && <h1 className={ styles.location }>{ location }</h1>}
                { weather.current && <WeatherStatus weather={ weather.current } /> }
                <div className={ styles.controls }>
                    <div className={ styles.switch}>
                        <Switch
                            checked={isHistoricalSearchEnabled}
                            onChange={ () => setHistoricalSearchEnabled(!isHistoricalSearchEnabled) }
                        />
                        <span>Historical data</span>
                    </div>
                    {isHistoricalSearchEnabled &&
                        <div className={styles.datepicker}>
                            <DatePicker value={historicalDate} onChange={setHistoricalDate}/>
                        </div>
                    }
                </div>

                { weather.historical && <TemperatureChart data={weather.historical.hourly} /> }
                { weather.historical && <HistoricalDataTable data={ weather.historical.hourly }/> }
            </div>
        </MuiPickersUtilsProvider>

    );
};

export default App;
