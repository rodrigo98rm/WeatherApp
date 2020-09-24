import * as React from 'react';

import { PlacesList, WeatherResponseFormat, ClimateDetails, ImageType } from '../services/services.inteface';
import { requestByName, requestByLattAndLong, climateCityDetails } from '../services/api.requests';
import { getWeatherImageUrl } from '../services/image.request';

import '../styles/services.css';

import { Search } from '../components/seach-button';

export const ServicesTestsPage: React.FC = () => {
  const [text, setText] = React.useState('');
  const [data, setData] = React.useState<PlacesList[]>([]);
  const [weatherData, setWeatherData] = React.useState<WeatherResponseFormat[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const imgFormat = React.useRef<ImageType>({ format: 'ico' });
  const dateTime = React.useRef('2020/9/22');

  //get client's current localization
  React.useEffect(() => {
    async function getCurrentLocalization() {
      setIsLoading(true);
      const response = await requestByLattAndLong();
      if (response) {
        handleListButton(response[0].woeid);
      }
      setIsLoading(false);
    }
    getCurrentLocalization();
  }, []);

  //get searched city

  async function handleListButton(woeid: number) {
    const result = await climateCityDetails(woeid);
    if (result) {
      setWeatherData(result.consolidated_weather);
    }
  }

  return (
    <div>
      <h1>Services Tests Page</h1>
      <p>Search by City Name</p>
      <div className='forms'>
        <input
          type='text'
          value={text}
          onChange={(text: React.ChangeEvent<HTMLInputElement>) => {
            setText(text.target.value);
          }}
        />
        <Search
          handleClick={(data: any) => setData(data)}
          title='Search'
          funcRequest={requestByName}
          param={{ name: text }}
        />
      </div>
      {isLoading && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      <p>{'Search Results:'}</p>
      <div className='result-details-container'>
        <div className='fetch-result'>
          {data.map((location: PlacesList) => (
            <button
              key={location.woeid}
              onClick={() => {
                handleListButton(location.woeid);
              }}
            >
              {location.title}
            </button>
          ))}
        </div>
        {weatherData.map((day) => {
          const url = getWeatherImageUrl(day.weather_state_abbr, imgFormat.current);
          return (
            <div className='details'>
              <h3>{day.applicable_date}</h3>
              <img src={url} alt='weatherLogo' />
              <h4>{day.weather_state_name}</h4>
              <p>Temp. Máxima: {day.max_temp.toFixed(1)} ˚C</p>
              <p>Temp. Mínima: {day.min_temp.toFixed(1)} ˚C</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
