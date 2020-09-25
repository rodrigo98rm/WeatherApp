import * as React from 'react';
import { climateCityDetails, requestByLattAndLong } from '../../services/api.requests';
import { WeatherResponseFormat } from '../../services/services.inteface';

interface GpsButtonProps {
  handleClick: (value: WeatherResponseFormat[]) => void;
}

export const GpsButton: React.FC<GpsButtonProps> = (props) => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleRequest = async () => {
    setLoading(true);
    const nearstCities = await requestByLattAndLong();
    if (nearstCities.length > 0) {
      const currentWeather = await climateCityDetails(nearstCities[0].woeid);
      props.handleClick(currentWeather.consolidated_weather ? currentWeather.consolidated_weather : []);
    }
    setLoading(false);
  };

  return (
    <>
      {loading && <h3>Loading...</h3>}
      <button onClick={handleRequest}>GPS</button>
    </>
  );
};
