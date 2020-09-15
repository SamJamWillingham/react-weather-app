import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Row, Col } from "react-bootstrap";

export default function Header() {
  return (
    <div id="header">
      <Row>
        <Col-auto>
          <h1 className="brand">Sää</h1>
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
              <i class="fas fa-search"></i>
            </button>
            <button className="btn btn-primary mb-2" id="find-location">
              <i class="fas fa-compass"></i>
            </button>
          </form>
        </Col>
      </Row>
    </div>
  );
}
