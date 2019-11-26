import { format, setHours } from 'date-fns';

const formatTime = time =>
    format(setHours(new Date(null), time / 100), 'HH:mm');

const formatWeatherDescriptions = descriptions => descriptions.join(', ');

export { formatTime, formatWeatherDescriptions };
