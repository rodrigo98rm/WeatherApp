import styled from 'styled-components';

export const Container = styled.div`
	flex: 1;
	background: #100e1d;
	padding: 148px 154px;

	@media only screen and (max-width: 600px) {
		padding: 52px 55px;
	}
`;

export const WeekContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 600px) {
		flex-direction: column;
	}
`;

export const DayCard = styled.div`
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
	width: 100%;
	height: 550px;
	background: #ffffff11;
	margin-top: 72px;
`;

export const HighlightsTitle = styled.h3`
	font-size: 24px;
	font-weight: bold;
`;
