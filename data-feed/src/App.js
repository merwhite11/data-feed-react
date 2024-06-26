import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.scss";
import AdImage from './Images/sample-ad.jpeg';
import TeaserList from './Teasers/TeaserList.jsx'

function App() {
  return (
    <div className="outer-container d-flex flex-column">
      <section className="header sticky-top bg-dark text-white d-flex align-items-center justify-content-center">
        <h1>Data Feed</h1>
      </section>
      <section className="content d-flex flex-column flex-md-row-reverse">
        <div className="content__ad">
          <img className="content__ad-image" src={AdImage}></img>
        </div>
        <div className="content__teasers col-md-6"><TeaserList/></div>
      </section>
    </div>
  );
}

export default App;
