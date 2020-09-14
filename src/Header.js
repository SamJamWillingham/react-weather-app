import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Row, Col } from "react-bootstrap";

export default function Header() {
  return (
    <Row>
      <Col-auto>
        <h1>Sää</h1>
      </Col-auto>
      <Col>
        <form className="form-inline" id="city-form">
          <label className="sr-only" for="inlineFormInputName2">
            Change City
          </label>
          <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            autofocus="on"
            autocomplete="off"
            placeholder="Helsinki"
          />
          <button type="submit" className="btn btn-primary mb-2">
            Search
          </button>
          <button className="btn btn-primary mb-2" id="find-location">
            Use Current Location
          </button>
        </form>
      </Col>
    </Row>
  );
}
