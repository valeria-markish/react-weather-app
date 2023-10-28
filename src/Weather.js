import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      humidity: Math.round(response.data.temperature.humidity),
      pressure: response.data.temperature.pressure,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.condition.icon,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
    });
  }

  function search() {
    let apiKey = "10469a8133000fdbto80b02142f32bfd";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9 mt-1">
              <input
                type="search"
                placeholder="Enter a city..."
                className="from-control w-100"
                autoFocus="on"
                onChange={handleCityChange}
              ></input>
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              ></input>
            </div>
          </div>
        </form>
        <WeatherInfo info={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
