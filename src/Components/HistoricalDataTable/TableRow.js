import React from "react";
import {formatTime, formatWeatherDescriptions} from "../../Utils/Helpers";
import styles from './HistoricalDataTable.scss';

const TableRow = ({data}) => (
    <tr className={ styles.row }>
        <td className={ styles.cell }>{formatTime(data.time)}</td>
        <td className={ styles.cell }>{data.temperature}</td>
        <td className={ styles.cell }>{data.pressure}</td>
        <td className={ styles.cell }>
            {formatWeatherDescriptions(data.weather_descriptions)}
        </td>
        <td className={ styles.cell }>
            { data.weather_icons.map(icon => <img src={icon} className={ styles.icon }/>) }
        </td>
    </tr>
);

export default TableRow;
