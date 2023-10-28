import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row mt-3">
        <div className="col">
          <div className="Forecast-day">Thu</div>
          <WeatherIcon code="rain-day" size={40} />
          <div className="Forecast-temperature">
            <span className="max-temp">19</span>º{" "}
            <span className="min-temp">10</span>º
          </div>
        </div>
      </div>
    </div>
  );
}
