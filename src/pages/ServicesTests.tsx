import React, { useEffect, useState, useRef } from "react";

import {
  FetchResult,
  RequestByName,
  RequestByLattAndLong,
  climateCityDetails,
  WeatherResponseFormat,
  ClimateDetails,
} from "../services/api-requests";

import "../styles/services.css";

export const ServicesTestsPage: React.FC = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState<FetchResult[]>([]);
  const [weatherData, setWeatherData] = useState<WeatherResponseFormat[]>([]);

  //get client's current localization
  useEffect(() => {
    async function getCurrentLocalization() {
      const response = await RequestByLattAndLong();
      if (response) {
        setData(response);
      }
    }
    getCurrentLocalization();
  }, []);

  //get searched city
  function handleClick() {
    // async function makeRequest() {
    //   if (text) {
    //     const response = await RequestByName({ location: text });
    //     if (response) {
    //       setData(response);
    //     }
    //   }
    // }
    async function getCurrentLocalization() {
      const response = await RequestByLattAndLong();
      if (response) {
        setData(response);
      }
    }
    getCurrentLocalization();
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
          onChange={(text: React.ChangeEvent<HTMLInputElement>) => {
            setText(text.target.value);
          }}
        />
        <button onClick={handleClick}>Search</button>
      </div>
      <p>{"Search Results: "}</p>
      <div className="result-details-container">
        {data.map((location: FetchResult) => (
          <div className="fetch-result">
            <p key={location.title + location.woeid}>{location.title}</p>
            <button
              onClick={() => {
                handleListButton(location.woeid);
              }}
            >
              Details
            </button>
          </div>
        ))}
        {weatherData.map((day) => {
          return (
            <div className="details">
              <h2>{day.weather_state_name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};
