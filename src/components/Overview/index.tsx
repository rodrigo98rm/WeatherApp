import React from 'react';

import PercentBar from '../PercentBar';

import {
	Container,
	ContentContainer,
	TempSelectorContainer,
	TempButton,
	WeekContainer,
	DayCard,
	CardTitle,
	WeatherImage,
	TemperaturesContainer,
	MaxTemp,
	MinTemp,
	TodaysHighlightsContainer,
	HighlightsGrid,
	HighlightContainer,
	Names,
} from './styles';

const days = [
	{
		title: 'Tomorrow',
		image:
			'https://s3-alpha-sig.figma.com/img/b926/bd18/ecbf9d895ef8296efd0c1ce51b6568cd?Expires=1601856000&Signature=Z8QVEaJWyoShkUiea4FEsjL3Ucj-CrcqRLdTDhaU6dawNYT97fT2fE-xX1X3r63BVvsd-TEha3lPDMW2wpegKvRVhRdWOfjhCBy5R0yCHVbNuUGbMTOtorO3nO3X5i-iRwi0FMZ7FGpwSnpPYkm2jRo0hCHgIBT5S76khd1wFP3xTTxxIo5ZfJMuYLjw7YWReMaf6sLhMhZr68GfEK04m-qqNyAOdqSMDDS1cxgv4ow37Infz~fc8DdqXXDZ2KHQmgx77QhAKhmocgIfwBkT58nVbKLgsbYqABTCikQiAN1-LaJMWTiPa5Znr1Clr5N2Yl8nt05OxZfMil2Er9SfAA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
		max: '16°C',
		min: '11°C',
	},
	{
		title: 'Sat, 7 Jun',
		image:
			'https://s3-alpha-sig.figma.com/img/b926/bd18/ecbf9d895ef8296efd0c1ce51b6568cd?Expires=1601856000&Signature=Z8QVEaJWyoShkUiea4FEsjL3Ucj-CrcqRLdTDhaU6dawNYT97fT2fE-xX1X3r63BVvsd-TEha3lPDMW2wpegKvRVhRdWOfjhCBy5R0yCHVbNuUGbMTOtorO3nO3X5i-iRwi0FMZ7FGpwSnpPYkm2jRo0hCHgIBT5S76khd1wFP3xTTxxIo5ZfJMuYLjw7YWReMaf6sLhMhZr68GfEK04m-qqNyAOdqSMDDS1cxgv4ow37Infz~fc8DdqXXDZ2KHQmgx77QhAKhmocgIfwBkT58nVbKLgsbYqABTCikQiAN1-LaJMWTiPa5Znr1Clr5N2Yl8nt05OxZfMil2Er9SfAA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
		max: '16°C',
		min: '11°C',
	},
	{
		title: 'Sat, 7 Jun',
		image:
			'https://s3-alpha-sig.figma.com/img/e308/a80c/552bf4cb3e0f6975f35550f86c1cfff4?Expires=1601856000&Signature=XztzhvQzDwIdT-iaVmlHbcZKCaO-8PJtEL6VVWFfNtQVLFVVngEzG95UWZtbC6B5kFljbTOiKsFnJSex9ukEuopadj7qn~AB7i7qpOnft6v70iihMb1LEz-AbLCtrM3YYA4Bwa~U1zQ2gfEK488AsrBmFFVSnUkaWIYsVaAn8qBAYbpuWIzhe7bUXQDeIpEjVEreIPHX2~3XC9dFireeRJ-lYjhnhWxjcvM-0PuoAmlOjpz0EqjYms4MF6PbnR2cfgp4ZSjwzj4nq1I8gPbEHWoKCalR6PysXOVll4GeyOjm24bOpmgbTHNIMeU2VP-cZ~EB6NC4LJNp0XiTV1IbyQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
		max: '16°C',
		min: '11°C',
	},
	{
		title: 'Sat, 7 Jun',
		image:
			'https://s3-alpha-sig.figma.com/img/45eb/70c2/0e1bc8eaa58f08247fba3e24c97f27a7?Expires=1601856000&Signature=d6TVdVaKIheDE9mvCm~C2iZmB0p35maDLdMHW2yVy1tv4h0oYS8s3ASQ~yYTzLnvBZqI~uft2vjsAuKYMtjZNwn0AbrjjwkUyCCMG8iM6KV9iQhGN6SL1X-hb9TmEB7acug5nShvoDMFQdFnPlD0~ZZSrbGAQBLYT~Js~AiMKZRyLiEDucX~m7KBcs0zU5YTsus917qNyQdoQCRcMBHeVFpz06WLRmmrtIOKdHf-b-U1FZAFbOQSIlqAjKiOghcGh9A64sjpXHATsuNkA~VMH8lPL2bF-ahtl~SR2nqT8iDLgrQ4AU3GGhdB7~Fdfz2BHJUykyODfRMnbTicIKAn-w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
		max: '16°C',
		min: '11°C',
	},
	{
		title: 'Sat, 7 Jun',
		image:
			'https://s3-alpha-sig.figma.com/img/fb7e/5223/a57b752577aeb78d53ecb0543cd572df?Expires=1601856000&Signature=I-j65vFjafT5HGukIUP1r94VUdl5yyH8dw21-HwQVi6Y8eSTWEb7Nw1eDRS8slDtj7CV5vCAQEkY7MmpI27tgFKK~EGXsERXvC3rHRR7CJiKI4CnoLXda41KDBdzjPI9VXJHArhf1ZpsJ6a6X2JhVvuOdzClaFrsxFZesA9OWV7F-8its5M-EOpVJtrrQe26prwhhRFF8Pg1TqkFmkJQSVUhdfYf5Ew7C042cgMPB1y~htAXSxKjAnELKcbRAAZyeC8iG9aua9XS56FxdAGc343Oe9WoXKsqN1u9KpyuyTaq0EmDnwnkHlNWIA4DIH02i6~Lw6HB~bx-3Qimidu4Kw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
		max: '16°C',
		min: '11°C',
	},
];

const Overview: React.FC = () => {
	return (
		<Container>
			<ContentContainer>
				<TempSelectorContainer>
					<TempButton type="button" selected>
						°C
					</TempButton>
					<TempButton type="button">°F</TempButton>
				</TempSelectorContainer>
				<WeekContainer>
					{days.map((day) => (
						<DayCard key={day.title}>
							<CardTitle>{day.title}</CardTitle>
							<WeatherImage src={day.image} />
							<TemperaturesContainer>
								<MaxTemp>{day.max}</MaxTemp>
								<MinTemp>{day.min}</MinTemp>
							</TemperaturesContainer>
						</DayCard>
					))}
				</WeekContainer>
				<TodaysHighlightsContainer>
					<h2>Today's Highlights</h2>
					<HighlightsGrid>
						<HighlightContainer>
							<h3>Wind status</h3>
							<p>
								<span className="number">7</span>
								<span className="unit">mph</span>
							</p>
						</HighlightContainer>
						<HighlightContainer>
							<h3>Humidity</h3>
							<p>
								<span className="number">84</span>
								<span className="unit">%</span>
							</p>
							<PercentBar
								style={{ width: '70%', marginTop: 28 }}
								progress={84}
							/>
						</HighlightContainer>
						<HighlightContainer>
							<h3>Visibility</h3>
							<p>
								<span className="number">6,4</span>
								<span className="unit">miles</span>
							</p>
						</HighlightContainer>
						<HighlightContainer>
							<h3>Air Pressure</h3>
							<p>
								<span className="number">998</span>
								<span className="unit">mb</span>
							</p>
						</HighlightContainer>
					</HighlightsGrid>
				</TodaysHighlightsContainer>
			</ContentContainer>
			<Names>
				Gabriel Fiali, Lucas Gobatto, Rodrigo Mayer @ DevChallenges.io
			</Names>
		</Container>
	);
};

export default Overview;
