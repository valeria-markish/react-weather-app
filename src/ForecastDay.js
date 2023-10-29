import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.info.time * 1000);
    let day = date.getDay();
    return days[day];
  }
  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <WeatherIcon code={props.info.condition.icon} size={40} />
      <div className="Forecast-temperature">
        <span className="max-temp">
          {Math.round(props.info.temperature.maximum)}º
        </span>
        <span className="min-temp">
          {Math.round(props.info.temperature.minimum)}º
        </span>
      </div>
    </div>
  );
}
