import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import { Row, Col } from "react-bootstrap";

export default function CurrentWeather() {
  function handleResponse(response) {
    console.log(response.data);
  }

  let WeatherData = {
    city: "Charlotte",
    date: "Fri, Aug 28 12:00",
    description: "Sunny",
    icon: "https://image.flaticon.com/icons/svg/869/869767.svg",
    humidity: 60,
    wind: 2,
  };

  const apiKey = "f8789029e0a5277fb2e5a66c29f35e2c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${WeatherData.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div id="currentWeather">
      <Row>
        <Col>
          <h3 className="current-city">{WeatherData.city}</h3>
          <p>{WeatherData.date}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <img
            src={WeatherData.icon}
            alt={WeatherData.description}
            width={80}
          />
          <p>
            <span className="Current">83 </span>{" "}
            <span className="Fahrenheit">°F</span> |{" "}
            <span className="celsuis">°C</span>
          </p>
        </Col>
        <Col>
          <h3>{WeatherData.description}</h3>
          <p>
            Wind: {WeatherData.wind} mph
            <br />
            Humidity: {WeatherData.humidity}%
          </p>
        </Col>
      </Row>
    </div>
  );
}
