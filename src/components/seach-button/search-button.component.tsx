// import { StyledButton } from './search-button.component.styled';
import * as React from 'react';
import { RequestFunctionsParams, ClimateDetails, PlacesList } from '../../services/services.interface';

export interface SearchButtonProps {
	title: string;
	param: RequestFunctionsParams;
	requestListOfCities?: (param: RequestFunctionsParams) => Promise<PlacesList[]>;
	requestWeather?: (param: RequestFunctionsParams) => Promise<ClimateDetails[]>;
	handleClick: (value: PlacesList[] | ClimateDetails[]) => void;
}

export const Search: React.FC<SearchButtonProps> = (props) => {
	const handleRequest = async () => {
		if (props.requestListOfCities) {
			const result = await props.requestListOfCities(props.param);
			props.handleClick(result || []);
		}
		if (props.requestWeather) {
			const result = await props.requestWeather(props.param);
			props.handleClick(result || []);
		}
	};

	return (
		<div>
			<button type='button' onClick={handleRequest}>{props.title}</button>
		</div>
	);
};
