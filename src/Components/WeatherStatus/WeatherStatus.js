import React from 'react';
import styles from './WeatherStatus.scss';

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

export default WeatherStatus;