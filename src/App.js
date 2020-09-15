import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header.js";
import CurrentWeather from "./CurrentWeather.js";
import Credit from "./Credit";

export default function App() {
  return (
    <div className="App">
      <div class="background-container">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
          alt="Moon Animation"
          id="background-image"
        />
        <div class="stars"></div>
        <div class="twinkling"></div>
        <div class="clouds"></div>
        <Header />
        <CurrentWeather />
        <Credit />
      </div>
    </div>
  );
}
