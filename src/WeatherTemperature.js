import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertC(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.tempC)}</span>
        <span className="unit">
          ºC |{" "}
          <a href="/" onClick={convertF} rel="noreferrer">
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    let tempF = (props.tempC * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(tempF)}</span>
        <span className="unit">
          <a href="/" onClick={convertC} rel="noreferrer">
            ºC
          </a>{" "}
          | ºF
        </span>
      </div>
    );
  }
}
