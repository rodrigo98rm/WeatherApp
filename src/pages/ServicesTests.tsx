import * as React from 'react';

import { PlacesList, WeatherResponseFormat, ClimateDetails, ImageType } from '../services/services.inteface';
import { requestByName, requestByLattAndLong, climateCityDetails } from '../services/api.requests';
import { getWeatherImageUrl } from '../services/image.request';

import '../styles/services.css';

import { Search } from '../components/seach-button';
import { GpsButton } from '../components/gps-button';

export const ServicesTestsPage: React.FC = () => {
  const [text, setText] = React.useState('');
  const [data, setData] = React.useState<PlacesList[]>([]);
  const [weatherData, setWeatherData] = React.useState<WeatherResponseFormat[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const imgFormat = React.useRef<ImageType>({ format: 'ico' });
  const dateTime = React.useRef('2020/9/22');

  async function handleListButton(woeid: number) {
    setIsLoading(true);
    const result = await climateCityDetails(woeid);
    if (result) {
      setWeatherData(result.consolidated_weather);
    }
    setIsLoading(false);
  }

  return (
    <div>
      <h1>Services Tests Page</h1>
      <GpsButton handleClick={(data: WeatherResponseFormat[]) => setWeatherData(data)} />
    </div>
  );
};
