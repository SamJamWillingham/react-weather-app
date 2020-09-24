import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormattedDate from "./FormattedDate";
import { Row, Col } from "react-bootstrap";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

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
          <WeatherIcon iconCode={props.data.icon} />
          <Temperature
            fahrenheitTemp={props.data.temperature}
            feelsLike={props.data.feelsLike}
          />
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
