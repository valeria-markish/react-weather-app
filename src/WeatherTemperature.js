import React, { useState } from "react";

export default function WeatherTemperature(props) {
  function convertF(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }
  function convertC(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }
  if (props.unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.tempC)}</span>
        <span className="unit">
          <span className="unitShown">ºC</span> |{" "}
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
          | <span className="unitShown">ºF</span>
        </span>
      </div>
    );
  }
}
