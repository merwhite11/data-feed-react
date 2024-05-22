import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.scss";
import AdImage from './Images/sample-ad.jpeg'

function App() {
  return (
    <div className="outer-container d-flex flex-column">
      <div className="header sticky-top bg-dark text-white text-center">
        <h1>Data Feed</h1>
      </div>
      <div className="content d-flex flex-column">
        <div className="content__ad">
        <img className="content__ad-image" src={AdImage}></img>
        </div>
        <div className="content__teasers">Teasers</div>
      </div>
    </div>
  );
}

export default App;
