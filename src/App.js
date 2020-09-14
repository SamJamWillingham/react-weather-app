import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header.js";
import CurrentWeather from "./CurrentWeather.js";
import Credit from "./Credit";

export default function App() {
  return (
    <div className="App">
      <Header />
      <CurrentWeather />
      <Credit />
    </div>
  );
}
