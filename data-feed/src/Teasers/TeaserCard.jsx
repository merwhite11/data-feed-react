import React from 'react';
import { Card } from 'react-bootstrap';
import TeaserList from './TeaserList';
import './Teasers.scss'

function TeaserCard({image, title, summary}) {
  console.log('title', title)
  return (
  <div className="teaser text-center justify-content-center">
    <section>
      <img className="teaser__image" src={image}>
      </img>
    </section>
    <section className="teaser__text d-flex flex-column justify-content-center">
    <h4 className="teaser__title text-center">{title}</h4>
    <p>{summary}</p>
    </section>
  </div>
  )
}

export default TeaserCard;

/*
tablet:

*/