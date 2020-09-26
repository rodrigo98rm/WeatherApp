import * as React from 'react';
import { climateCityDetails, requestByLattAndLong } from '../../services/api.requests';
import { ClimateDetails } from '../../services/services.interface';
import { GpsButtonStyled } from './gps-button.component.styled';
import { GpsIcon } from '../../assets/icons/GpsIcon';

interface GpsButtonProps {
	onTap: (value: ClimateDetails) => void;
}

export const GpsButton: React.FC<GpsButtonProps> = (props) => {
	const handleRequest = async (): Promise<void> => {
		const nearstCities = await requestByLattAndLong();
		if (nearstCities.length > 0) {
			const currentWeather = await climateCityDetails(nearstCities[0].woeid);
			props.onTap(currentWeather || []);
		}
	};

	return (
		<GpsButtonStyled onClick={handleRequest}>
			<GpsIcon />
		</GpsButtonStyled>
	);
};
