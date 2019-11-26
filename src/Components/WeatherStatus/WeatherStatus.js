import React from 'react';
import styles from './WeatherStatus.scss';
import PropTypes from "prop-types";

const WeatherStatus = ({ weather }) => (
    <section className={ styles.weatherStatus }>
        <span className={ styles.item }>{ weather.temperature + "°C" }</span>
        <span className={ styles.item }>{ weather.pressure + " hPa" }</span>
        <div className={ styles.item }>
            <div className={ styles.icons }>
                { weather.weather_icons.map(icon => <img src={icon} className={ styles.icon }/>) }
            </div>
            <div className={ styles.descriptions }>
                { weather.weather_descriptions.map(description => <p>{ description }</p>)}
            </div>
        </div>
    </section>
);

WeatherStatus.propTypes = {
    weather: PropTypes.shape({
        temperature: PropTypes.number,
        pressure: PropTypes.number,
        weather_icons: PropTypes.arrayOf(PropTypes.string),
        weather_descriptions: PropTypes.arrayOf(PropTypes.string),
    }),
};

export default WeatherStatus;