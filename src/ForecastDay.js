import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    if (props.unit === "fahrenheit") {
      temperature = Math.round((temperature * 9) / 5 + 32);
    }
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    if (props.unit === "fahrenheit") {
      temperature = Math.round((temperature * 9) / 5 + 32);
    }
    return `${temperature}°`;
  }

  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    return days[day];
  }
  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={40} />
      <div className="Forecast-temperature">
        <span className="max-temp">{maxTemp()}</span>
        <span className="min-temp">{minTemp()}</span>
      </div>
    </div>
  );
}
