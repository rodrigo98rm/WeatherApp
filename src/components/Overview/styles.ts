import styled from 'styled-components';

export const Container = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background: #100e1d;
	padding: 32px;
`;

export const WeekContainer = styled.div`
	width: 100%;
	display: grid;
	grid-column-gap: 26px;
	grid-row-gap: 32px;
	grid-template-columns: auto auto;
	justify-content: center;

	@media only screen and (min-width: 768px) {
		display: flex;
	}
`;

export const DayCard = styled.div`
	width: 120px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #1e213a;
	padding: 18px;
`;

export const CardTitle = styled.span`
	font-size: 16px;
`;

export const WeatherImage = styled.img`
	margin-top: 10px;
	width: 56px;
`;

export const TemperaturesContainer = styled.div`
	margin-top: 30px;
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export const MaxTemp = styled.span`
	color: #e7e7eb;
`;

export const MinTemp = styled.span`
	color: #a09fb1;
`;

export const TodaysHighlightsContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 52px;
`;

export const HighlightsGrid = styled.div`
	width: 100%;

	h2 {
		font-size: 24px;
		font-weight: bold;
	}

	@media only screen and (min-width: 768px) {
		display: grid;
		grid-column-gap: 48px;
		grid-row-gap: 0px;
		grid-template-columns: auto auto;
		justify-content: center;
	}
`;

export const HighlightContainer = styled.div`
	background-color: #1e213a;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 32px;
	padding: 36px 0;
	width: 328px;

	h3 {
		font-size: 16px;
	}

	p .number {
		font-size: 64px;
		font-weight: bold;
	}

	p .unit {
		font-size: 32px;
	}
`;

export const Names = styled.p`
	bottom: 26;
	text-align: center;
	margin-top: 56px;
	color: #616475;
`;
