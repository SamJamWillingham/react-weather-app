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
            <label className="sr-only" htmlFor="inlineFormInputName2">
              Change City
            </label>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              autoFocus="on"
              autoComplete="off"
              placeholder="Helsinki"
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
    </div>
  );
}
