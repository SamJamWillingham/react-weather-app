import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormattedDate from "./FormattedDate";
import { Row, Col } from "react-bootstrap";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <Row>
        <Col>
          <h3 className="current-city">{props.data.city}</h3>
          <p>
            <FormattedDate date={props.data.date} />
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <img
            src={`http://openweathermap.org/img/w/${props.data.icon}.png`}
            alt={props.data.description}
            width={80}
            className="current-icon"
          />
          <p>
            <span className="Current">
              {Math.round(props.data.temperature)}{" "}
            </span>{" "}
            <span className="Fahrenheit">°F</span> |{" "}
            <span className="celsuis">°C</span>
            <br />
            <small>
              Feels like <strong>{Math.round(props.data.feelsLike)}°C</strong>
            </small>
          </p>
        </Col>
        <Col>
          <h3 className="text-capitalize">{props.data.description}</h3>
          <ul>
            <li>Wind: {props.data.wind.speed} mph</li>
            <li>Humidity: {props.data.humidity}%</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}
