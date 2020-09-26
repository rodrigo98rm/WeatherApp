import { ImageType } from './services.interface';

export function getWeatherImageUrl(weatherStateAbbr: string, imgType: ImageType): string {
	let url = '';
	switch (imgType.format) {
		case 'svg':
			url = `https://www.metaweather.com/static/img/weather/${weatherStateAbbr}.svg`;
			break;
		case 'ico':
			url = `https://www.metaweather.com/static/img/weather/ico/${weatherStateAbbr}.ico`;
			break;
		case 'smallPng':
			url = `https://www.metaweather.com/static/img/weather/png/${weatherStateAbbr}.png`;
			break;
		default:
			// bigPng
			url = `https://www.metaweather.com/static/img/weather/png/64/${weatherStateAbbr}.png`;
			break;
	}
	return url;
}
