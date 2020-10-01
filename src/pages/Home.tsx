import React from 'react';
import { InitalHomePage } from '../components/Loading';
import { useWeather } from '../hooks/WeatherHook/weather';
import { useLoading } from '../hooks/LoadingHook/loading';
import { requestByLattAndLong } from '../services/api.requests';

const Home: React.FC = ({ children }) => {
	const { climate, getClimate } = useWeather();
	const { setLoading } = useLoading();

	React.useEffect(() => {
		const exec = async (): Promise<void> => {
			console.log('here');
			setLoading(true);
			const nearstCities = await requestByLattAndLong();
			if (nearstCities.length > 0) {
				getClimate(nearstCities[0].woeid);
			}
			setLoading(false);
			console.log('here');
		};

		exec();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!climate) {
		return (
			<div style={{ display: 'flex' }}>
				<InitalHomePage />
			</div>
		);
	}

	return <div style={{ display: 'flex' }}>{children}</div>;
};

export default Home;
