import React, { useEffect, useState } from "react";

import {
  FetchResult,
  WeatherResponseFormat,
  ClimateDetails,
} from "../services/services.inteface";

import {
  RequestByName,
  RequestByLattAndLong,
  climateCityDetails,
} from "../services/api.requests";

import { getWeatherImageUrl } from "../services/image.request";

import "../styles/services.css";

//TODO: EXCLUIR BUID E npm uninstall serve

export const ServicesTestsPage: React.FC = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState<FetchResult[]>([]);
  const [weatherData, setWeatherData] = useState<WeatherResponseFormat[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  //get client's current localization
  useEffect(() => {
    async function getCurrentLocalization() {
      const response = await RequestByLattAndLong();
      if (response) {
        handleListButton(response[0].woeid);
      }
    }
    getCurrentLocalization();
  }, []);

  //get searched city
  function handleClick() {
    async function makeRequest() {
      if (text) {
        setIsLoading(true);
        const response = await RequestByName({ location: text });
        if (response) {
          setData(response);
        }
        setIsLoading(false);
      }
    }
    makeRequest();
  }

  async function handleListButton(woeid: number) {
    const result: ClimateDetails = await climateCityDetails(woeid);
    if (result) {
      setWeatherData(result.consolidated_weather);
    }
  }

  return (
    <div>
      <h1>Services Tests Page</h1>
      <p>Search by City Name</p>
      <div className="forms">
        <input
          type="text"
          value={text}
          onChange={(text: React.ChangeEvent<HTMLInputElement>) => {
            setText(text.target.value);
          }}
        />
        <button onClick={handleClick}>Search</button>
      </div>
      {isLoading && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      <p>{"Search Results:"}</p>
      <div className="result-details-container">
        <div className="fetch-result">
          {data.map((location: FetchResult) => (
            <button
              onClick={() => {
                handleListButton(location.woeid);
              }}
            >
              {location.title}
            </button>
          ))}
        </div>
        {weatherData.map((day) => {
          const url = getWeatherImageUrl(day.weather_state_abbr, {
            format: "bigPng",
          });
          return (
            <div className="details">
              <img src={url} alt="weatherLogo" />
              <h3>{day.weather_state_name}</h3>
              <p>Temp. Máxima: {day.max_temp.toFixed(1)} ˚C</p>
              <p>Temp. Mínima: {day.min_temp.toFixed(1)} ˚C</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
