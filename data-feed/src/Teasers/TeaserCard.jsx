import React from 'react';
import { Card } from 'react-bootstrap';
import TeaserList from './TeaserList';
import './Teasers.scss'

function TeaserCard({image, title, summary}) {
  console.log('title', title)
  return (
  <div className="teaser text-center justify-content-center">
    <section className="teaser__image-container">
      <img className="teaser__image" src={image}>
      </img>
    </section>
    <section className="teaser__text d-flex flex-column justify-content-start">
    <h4 className="teaser__title justify-content-center">{title}</h4>
    <p className="teaser__summary">{summary}</p>
    </section>
  </div>
  )
}

export default TeaserCard;

/*
tablet:

*/