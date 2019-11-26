import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';
import styles from './HistoricalDataTable.scss';

const HistoricalDataTable = ({ data }) => (
    <table className={styles.container}>
        <thead>
            <tr>
                <th>Time</th>
                <th>Temperature</th>
                <th>Pressure</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            {data.map((dataPerHour, index) => (
                <TableRow
                    time={dataPerHour.time}
                    temperature={dataPerHour.temperature}
                    pressure={dataPerHour.pressure}
                    descriptions={dataPerHour.weather_descriptions}
                    icons={dataPerHour.weather_icons}
                    key={index}
                />
            ))}
        </tbody>
    </table>
);

HistoricalDataTable.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            time: PropTypes.string,
            temperature: PropTypes.number,
            pressure: PropTypes.number,
            weather_descriptions: PropTypes.arrayOf(PropTypes.string),
            weather_icons: PropTypes.arrayOf(PropTypes.string),
        })
    ),
};

export default HistoricalDataTable;
