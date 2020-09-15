import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Row, Col } from "react-bootstrap";

export default function CurrentWeather() {
  let WeatherData = {
    city: "Charlotte",
    date: "Fri, Aug 28 12:00",
    description: "Sunny",
    icon: "https://image.flaticon.com/icons/svg/869/869767.svg",
    humidity: 60,
    wind: 2,
  };

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
