import React from 'react';
import { useWeather } from '../hooks/weather';
import { requestByLattAndLong } from '../services/api.requests';

const Home: React.FC = ({ children }) => {
	const { climate, getClimate } = useWeather();

	React.useEffect(() => {
		const exec = async (): Promise<void> => {
			const nearstCities = await requestByLattAndLong();
			if (nearstCities.length > 0) {
				getClimate(nearstCities[0].woeid);
			}
		};

		exec();
	}, []);

	// if (!climate) {
	// 	return <div>Carregando...</div>;
	// }

	return <div style={{ display: 'flex' }}>{children}</div>;
};

export default Home;
