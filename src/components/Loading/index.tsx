import React from 'react';
import { InitialSidebar, Label, Magnify, VSeparator, Container, Map } from './styled';
import { ButtonContainer, Button } from '../Sidebar/styles';
import { GpsButton } from '../GpsButton';
import { useWeather } from '../../hooks/weather';
import { Names } from '../Overview/styles';

export const Loading: React.FC = () => {
	const { getClimate } = useWeather();

	return (
		<>
			<InitialSidebar>
				<ButtonContainer>
					<Button>Search for places</Button>
					<GpsButton onTap={getClimate} />
				</ButtonContainer>
				<VSeparator />
				<Magnify size='300px' />
				<VSeparator />
				<Label>
					Nothing to show... Search the place or allow us your location to see details about the weather for the next 5
					days.
				</Label>
			</InitialSidebar>
			<Container>
				<Map size='200px' />
				<VSeparator />
				<Label>Tell me what you want here on the side! :)</Label>
				<Names>Gabriel Fiali, Lucas Gobatto, Rodrigo Mayer @ DevChallenges.io</Names>
			</Container>
		</>
	);
};
