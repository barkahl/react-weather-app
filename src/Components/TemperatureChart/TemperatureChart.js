import React from 'react';
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import styles from './TemperatureChart.scss'
import {formatTime} from "../../Utils/Helpers";

const processData = data =>
    data.map(({ time, temperature }) => ({
        time: formatTime(time),
        temperature,
    }));

const TemperatureChart = ({data}) => {
    return (
        <LineChart width={600} height={300} data={processData(data)} className={ styles.container }>
            <Line type="monotone" dataKey="temperature" stroke="#8884d8"/>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
        </LineChart>
    );
};

export default TemperatureChart;
