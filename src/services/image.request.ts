import { ImageType } from "./services.inteface";

export function getWeatherImageUrl(
  weatherSteteAbbr: string,
  imgType: ImageType
) {
  let url = "";
  switch (imgType.format) {
    case "svg":
      url = `https://www.metaweather.com/static/img/weather/${weatherSteteAbbr}.svg`;
      break;
    case "ico":
      url = `https://www.metaweather.com/static/img/weather/ico/${weatherSteteAbbr}.ico`;
      break;
    case "smallPng":
      url = `https://www.metaweather.com/static/img/weather/png/${weatherSteteAbbr}.png`;
      break;
    default:
      //bigPng
      url = `https://www.metaweather.com/static/img/weather/png/64/${weatherSteteAbbr}.png`;
      break;
  }
  return url;
}
