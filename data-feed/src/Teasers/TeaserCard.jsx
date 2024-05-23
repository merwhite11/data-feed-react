import React from 'react';
import TeaserList from './TeaserList';

function TeaserCard({image, title, summary}) {
  console.log('title', title)
  return (
  <div>
    <div>{title}</div>
    <div>{summary}</div>
  </div>
  )
}

export default TeaserCard