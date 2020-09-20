import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";

export default function Form_Loader(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind,
    });
  }

  function search() {
    const apiKey = "f8789029e0a5277fb2e5a66c29f35e2c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="header">
        <Row>
          <Col-auto>
            <h1 className="brand">Sää</h1>
          </Col-auto>
          <Col>
            <form
              className="form-inline"
              id="city-form"
              onSubmit={handleSubmit}
            >
              <label className="sr-only" htmlFor="inlineFormInputName2">
                Change City
              </label>
              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                autoFocus="on"
                autoComplete="off"
                placeholder="Helsinki"
                onChange={handleCityChange}
              />
              <button type="submit" className="btn btn-primary mb-2">
                <i className="fas fa-search"></i>
              </button>
              <button className="btn btn-primary mb-2" id="find-location">
                <i className="fas fa-compass"></i>
              </button>
            </form>
          </Col>
        </Row>

        <Row>
          <Col>
            <WeatherInfo data={weatherData} />
          </Col>
        </Row>
      </div>
    );
  } else {
    search();

    return (
      <Row className="Loader">
        <Col>
          <div className="Col">
            <Loader
              type="Rings"
              color="#FFFFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          </div>
        </Col>
      </Row>
    );
  }
}
