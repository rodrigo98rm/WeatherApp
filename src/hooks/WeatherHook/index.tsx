import React, { createContext, useCallback, useState, useContext } from 'react';
import { climateCityDetails } from '../../services/api.requests';
import { ClimateDetails } from '../../services/services.interface';
import toFahrenheit from '../../utils/functions/toFahrenheit';

interface WeatherContextData {
	climate: ClimateDetails | null;
	tempUnit: 'celcius' | 'fahrenheit';
	getClimate(woeid: number): void;
	changeTempUnit(unit: WeatherContextData['tempUnit']): void;
}

const WeatherContext = createContext<WeatherContextData>({} as WeatherContextData);

export const WeatherProvider: React.FC = ({ children }) => {
	const [climate, setClimate] = useState<ClimateDetails | null>(null);
	const [tempUnit, setTempUnit] = useState<WeatherContextData['tempUnit']>(() => {
		const savedUnit = localStorage.getItem('@WeatherApp:tempUnit') as WeatherContextData['tempUnit'];

		if (savedUnit) {
			return savedUnit;
		}

		return 'celcius';
	});

	const addFahrenheitTemps = useCallback((data: ClimateDetails): ClimateDetails => {
		const tempData = { ...data };

		tempData.consolidated_weather = data.consolidated_weather.map((day) => {
			const tempDay = { ...day };

			tempDay.min_temp_fahrenheit = toFahrenheit(tempDay.min_temp);
			tempDay.max_temp_fahrenheit = toFahrenheit(tempDay.max_temp);
			tempDay.the_temp_fahrenheit = toFahrenheit(tempDay.the_temp);

			return tempDay;
		});

		return tempData;
	}, []);

	const changeTempUnit = useCallback((unit: WeatherContextData['tempUnit']) => {
		// TODO: Save selected temp unit to localStorage

		localStorage.setItem('@WeatherApp:tempUnit', unit);

		setTempUnit(unit);
	}, []);

	const getClimate = useCallback(
		async (woeid: number) => {
			const result = await climateCityDetails(woeid);

			setClimate(addFahrenheitTemps(result));
		},
		[addFahrenheitTemps],
	);

	return (
		<WeatherContext.Provider value={{ climate, tempUnit, getClimate, changeTempUnit }}>
			{children}
		</WeatherContext.Provider>
	);
};

export function useWeather(): WeatherContextData {
	const context = useContext(WeatherContext);

	if (!context) {
		throw new Error('useWeather must be used within an WeatherProvider');
	}

	return context;
}
