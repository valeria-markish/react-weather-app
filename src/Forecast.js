import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastInfo, setForecastInfo] = useState(null);
  function forecastData(response) {
    console.log(response.data.daily);
    setForecastInfo(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row mt-3">
          <div className="col">
            <ForecastDay info={forecastInfo[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "10469a8133000fdbto80b02142f32bfd";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.info.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(forecastData);
    return null;
  }
}
