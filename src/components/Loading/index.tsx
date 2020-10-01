import React from 'react';
import { InitialSidebar, Label, Magnify, VSeparator, Container, Map } from './styled';
import { ButtonContainer, Button } from '../Sidebar/styles';
import { GpsButton } from '../GpsButton';
import { useWeather } from '../../hooks/WeatherHook/weather';
import { useLoading } from '../../hooks/LoadingHook/loading';
import { Names } from '../Overview/styles';

export const OverviewOnLoad: React.FC = () => {
	return (
		<Container>
			<img
				alt='loading'
				src='https://68.media.tumblr.com/348df0120e07cd7f14d5a394f86400de/tumblr_ootetnYTap1uoh1aio4_400.gif'
			/>
			<VSeparator />
			<Label>Loading...</Label>
			<Names>Gabriel Fiali, Lucas Gobatto, Rodrigo Mayer @ DevChallenges.io</Names>
		</Container>
	);
};

const OverviewNotOnLoad: React.FC = () => {
	return (
		<Container>
			<Map size='200px' />
			<VSeparator />
			<Label>Tell me what you want here on the side! :)</Label>
			<Names>Gabriel Fiali, Lucas Gobatto, Rodrigo Mayer @ DevChallenges.io</Names>
		</Container>
	);
};

export const InitalHomePage: React.FC = () => {
	const { getClimate } = useWeather();
	const { isLoading } = useLoading();
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
			{isLoading ? <OverviewOnLoad /> : <OverviewNotOnLoad />}
		</>
	);
};
