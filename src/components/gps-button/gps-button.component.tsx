import * as React from 'react';
import { requestByLattAndLong } from '../../services/api.requests';
import { GpsButtonStyled } from './gps-button.component.styled';
import { GpsIcon } from '../../assets/icons/GpsIcon';

interface GpsButtonProps {
	onTap(woeid: number): void;
}

export const GpsButton: React.FC<GpsButtonProps> = (props) => {
	const handleRequest = async (): Promise<void> => {
		const nearstCities = await requestByLattAndLong();
		if (nearstCities.length > 0) {
			props.onTap(nearstCities[0].woeid);
		}
	};

	return (
		<GpsButtonStyled onClick={handleRequest}>
			<GpsIcon />
		</GpsButtonStyled>
	);
};
