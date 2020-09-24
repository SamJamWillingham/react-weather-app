import React, { useState } from "react";
import "./App.css";

export default function Temperature(props) {
  let [unit, setUnit] = useState("fahrenheit");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
    // (32°F − 32) × 5/9 = 0°C
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
    //(0°C × 9/5) + 32 = 32°F
  }

  if (unit === "fahrenheit") {
    return (
      <p>
        <span className="Current">{Math.round(props.fahrenheitTemp)} </span>{" "}
        <span className="unit">°F</span> |{" "}
        <span>
          <button onClick={convertToCelsius}>°C</button>
        </span>
        <br />
        <small>
          Feels like <strong>{Math.round(props.feelsLike)}°</strong>
        </small>
      </p>
    );
  } else {
    let celsius = ((props.fahrenheitTemp - 32) * 5) / 9;
    let celsiusFeelsLike = ((props.feelsLike - 32) * 5) / 9;
    return (
      <div>
        <p>
          <span className="Current">{Math.round(celsius)} </span>{" "}
          <span>
            <button onClick={showFahrenheit}>°F</button>
          </span>{" "}
          | <span className="unit">°C</span>
          <br />
          <small>
            Feels like <strong>{Math.round(celsiusFeelsLike)}°</strong>
          </small>
        </p>
      </div>
    );
  }
}
