import React from "react";
import PropTypes from "prop-types";
import {formatTime, formatWeatherDescriptions} from "../../Utils/Helpers";
import styles from './HistoricalDataTable.scss';

const TableRow = ({time, temperature, pressure, descriptions, icons }) => (
    <tr className={styles.row}>
        <td className={styles.cell}>{formatTime(time)}</td>
        <td className={styles.cell}>{temperature}</td>
        <td className={styles.cell}>{pressure}</td>
        <td className={styles.cell}>
            {formatWeatherDescriptions(descriptions)}
        </td>
        <td className={styles.cell}>
            {icons.map(icon => <img src={icon} className={styles.icon}/>)}
        </td>
    </tr>
);

TableRow.propTypes = {
    time: PropTypes.string,
    temperature: PropTypes.number,
    pressure: PropTypes.number,
    descriptions: PropTypes.arrayOf(PropTypes.string),
    icons: PropTypes.arrayOf(PropTypes.string),
};

export default TableRow;
