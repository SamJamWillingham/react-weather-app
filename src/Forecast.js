import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import "./App.css";
import WeatherIcon from "./WeatherIcon.js";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded === true) {
    return (
      <Row className="forecast">
        <Col className="forecast-0">
          {new Date(forecast.list[0].dt * 1000).getHours()}:00
          <WeatherIcon iconCode={forecast.list[0].weather[0].icon} />
          <p className="ForecastTemp">
            {Math.round(forecast.list[0].main.temp)}°F
          </p>
        </Col>
        <Col className="forecast-1">
          {new Date(forecast.list[1].dt * 1000).getHours()}:00
          <WeatherIcon iconCode={forecast.list[1].weather[0].icon} />
          <p className="ForecastTemp">
            {Math.round(forecast.list[1].main.temp)}°F
          </p>
        </Col>
        <Col className="forecast-2">
          {new Date(forecast.list[2].dt * 1000).getHours()}:00
          <WeatherIcon iconCode={forecast.list[2].weather[0].icon} />
          <p className="ForecastTemp">
            {Math.round(forecast.list[2].main.temp)}°F
          </p>
        </Col>
        <Col className="forecast-3">
          {new Date(forecast.list[3].dt * 1000).getHours()}:00
          <WeatherIcon iconCode={forecast.list[3].weather[0].icon} />
          <p className="ForecastTemp">
            {Math.round(forecast.list[3].main.temp)}°F
          </p>
        </Col>
        <Col className="forecast-4">
          {new Date(forecast.list[4].dt * 1000).getHours()}:00
          <WeatherIcon iconCode={forecast.list[4].weather[0].icon} />
          <p className="ForecastTemp">
            {Math.round(forecast.list[4].main.temp)}°F
          </p>
        </Col>
      </Row>
    );
  } else {
    const apiKey = "f8789029e0a5277fb2e5a66c29f35e2c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleForecastResponse);

    return null;
  }
}
