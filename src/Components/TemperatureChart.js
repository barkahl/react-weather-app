import React from 'react';
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import { format, setHours } from 'date-fns';

const processData = data =>
    data.map(({ time, temperature }) => ({
        time: format(setHours(new Date(null), time/100), 'HH:mm'),
        temperature,
    }));

const TemperatureChart = ({data}) => {
    return (
        <LineChart width={600} height={300} data={processData(data)}>
            <Line type="monotone" dataKey="temperature" stroke="#8884d8"/>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
        </LineChart>
    );
};

export default TemperatureChart;
