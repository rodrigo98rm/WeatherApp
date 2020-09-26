import React, { createContext, useCallback, useState, useContext } from 'react';
import { climateCityDetails } from '../services/api.requests';
import { ClimateDetails } from '../services/services.interface';

interface WeatherContextData {
	climate: ClimateDetails | null;
	getClimate(woeid: number): void;
}

const WeatherContext = createContext<WeatherContextData>({} as WeatherContextData);

export const WeatherProvider: React.FC = ({ children }) => {
	const [climate, setClimate] = useState<ClimateDetails | null>(null);

	const getClimate = useCallback(async (woeid: number) => {
		const result = await climateCityDetails(woeid);

		setClimate(result);
	}, []);

	return <WeatherContext.Provider value={{ climate, getClimate }}>{children}</WeatherContext.Provider>;
};

export function useWeather(): WeatherContextData {
	const context = useContext(WeatherContext);

	if (!context) {
		throw new Error('useWeather must be used within an WeatherProvider');
	}

	return context;
}
