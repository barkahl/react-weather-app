import React from 'react';

const formatWeatherDescriptions = descriptions =>
    descriptions.reduce(
        (acc, curr) => acc ? [acc, curr].join(', ') : curr,
        ''
    );

const TableRow = ({data}) => (
    <tr>
        <td>{data.time}</td>
        <td>{data.temperature}</td>
        <td>{data.pressure}</td>
        <td>{formatWeatherDescriptions(data.weather_descriptions)}</td>
    </tr>
);

const HistoricalDataTable = ({data}) => (
    <table>
        <thead>
        <tr>
            <th>Time</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Description</th>
        </tr>
        </thead>
        <tbody>
        {data.map(dataPerHour => <TableRow data={dataPerHour}/>)}
        </tbody>
    </table>
);

export default HistoricalDataTable;
