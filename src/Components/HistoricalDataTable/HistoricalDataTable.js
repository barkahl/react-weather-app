import React from 'react';
import TableRow from "./TableRow";
import styles from './HistoricalDataTable.scss';

const HistoricalDataTable = ({data}) => (
    <table className={ styles.container }>
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
