import React from "react";
import data from "../Data/data.json";
import TeaserCard from "./TeaserCard.jsx";

function TeaserList() {
  const teasers = data.data;
  return (teasers.map((teaser) => (
    <TeaserCard
      key={teaser.id}
      title={teaser.contentTitle}
      summary={teaser.contentSummary}
      image={teaser.contentImageUrl}
    ></TeaserCard>
  ))
)
}

export default TeaserList;
