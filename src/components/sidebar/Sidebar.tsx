import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import * as Styles from './styles';
import { GpsButton } from '../GpsButton';
import formatDate from '../../utils/functions/formatDate';
import { useWeather } from '../../hooks/WeatherHook/weather';
import { getIcon } from '../../utils/functions/weatherIcon';

const Sidebar: React.FC = () => {
	const { climate, tempUnit, getClimate } = useWeather();

	return (
		<Styles.Sidebar>
			<Styles.ButtonContainer>
				<Styles.Button>Search for places</Styles.Button>
				<GpsButton onTap={getClimate} />
			</Styles.ButtonContainer>
			{climate && (
				<Styles.InfoContainer>
					{climate?.consolidated_weather[0].weather_state_abbr && (
						<Styles.StatusImage src={getIcon(climate?.consolidated_weather[0].weather_state_abbr) || ''} />
					)}
					{tempUnit === 'celcius' && (
						<Styles.TempContainer>
							{climate?.consolidated_weather[0].the_temp.toFixed(0)} <b>⁰C</b>
						</Styles.TempContainer>
					)}
					{tempUnit === 'fahrenheit' && (
						<Styles.TempContainer>
							{climate?.consolidated_weather[0].the_temp_fahrenheit?.toFixed(0)} <b>⁰F</b>
						</Styles.TempContainer>
					)}
					<h1>{climate?.consolidated_weather[0].weather_state_name}</h1>
					<Styles.DateContainer>
						<h2>Today</h2>
						<h2>&#8226;</h2>
						<h2>
							{climate?.consolidated_weather[0].applicable_date &&
								formatDate(climate?.consolidated_weather[0].applicable_date)}
						</h2>
					</Styles.DateContainer>
					<Styles.DateContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
						<FaMapMarkerAlt style={{ marginRight: 8 }} />
						<h3>{climate?.title}</h3>
					</Styles.DateContainer>
				</Styles.InfoContainer>
			)}
		</Styles.Sidebar>
	);
};

export default Sidebar;
