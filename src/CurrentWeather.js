import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Loader from "react-loader-spinner";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      date: "Friday 12:00",
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind,
    });
  }

  if (weatherData.ready) {
    return (
      <div id="currentWeather">
        <Row>
          <Col>
            <h3 className="current-city">{weatherData.city}</h3>
            <p>{weatherData.date}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src={`http://openweathermap.org/img/w/${weatherData.icon}.png`}
              alt={weatherData.description}
              width={80}
            />
            <p>
              <span className="Current">
                {Math.round(weatherData.temperature)}{" "}
              </span>{" "}
              <span className="Fahrenheit">°F</span> |{" "}
              <span className="celsuis">°C</span>
            </p>
          </Col>
          <Col>
            <h3 className="text-capitalize">{weatherData.description}</h3>
            <ul>
              <li>Wind: {weatherData.wind.speed} mph</li>
              <li>Humidity: {weatherData.humidity}%</li>
            </ul>
          </Col>
        </Row>
      </div>
    );
  } else {
    const apiKey = "f8789029e0a5277fb2e5a66c29f35e2c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (
      <div className="Row Loader">
        <div className="Col">
          <Loader
            type="Rings"
            color="#FFFFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      </div>
    );
  }
}
