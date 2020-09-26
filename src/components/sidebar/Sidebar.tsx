import React from 'react';
import * as Styles from './styles';
import { ClimateDetails } from '../../services/services.interface';
import { GpsButton } from '../gps-button';
import { getWeatherImageUrl } from '../../services/image.request';

const Sidebar: React.FC = () => {
	const [weatherData, setWeatherData] = React.useState<ClimateDetails | null>(null);

	React.useEffect(() => {
		console.log(weatherData);
	}, [weatherData]);

	return (
		<Styles.Sidebar>
			<Styles.ButtonContainer>
				<Styles.Button>Search for places</Styles.Button>
				<GpsButton onTap={setWeatherData} />
			</Styles.ButtonContainer>
			<Styles.InfoContainer>
				{weatherData?.consolidated_weather[0].weather_state_abbr && (
					<Styles.StatusImage
						src={getWeatherImageUrl(weatherData?.consolidated_weather[0].weather_state_abbr, { format: 'svg' })}
						alt='Cloudy'
					/>
				)}
				<Styles.TempContainer>
					{weatherData?.consolidated_weather[0].max_temp.toFixed(1)} <b>⁰C</b>
				</Styles.TempContainer>
				<h1>{weatherData?.consolidated_weather[0].weather_state_name}</h1>
				<Styles.DateContainer>
					<h2>Today</h2>
					<h2>&#8226;</h2>
					<h2>{weatherData?.consolidated_weather[0].applicable_date}</h2>
				</Styles.DateContainer>
				<h3>{weatherData?.title}</h3>
			</Styles.InfoContainer>
		</Styles.Sidebar>
	);
};

export default Sidebar;
