import React from 'react';

const RatingLevel = ({ title, range, value }) => (
  <div style={{ background: `linear-gradient(to right, #04aec1 ${value}%, #cde1f8 ${100 - value}% 100%)` }} className="rating-level">
    <div className="rating-level-title">{title}</div>
    <div className="rating-range">{range}</div>
  </div>
);

const ExperienceRating = ({ percentageValue }) => {
  let levelComponent;

  if (percentageValue <= 20) {
    levelComponent = <RatingLevel title="Novice" range="Up to 20%" value={percentageValue}/>;
  } else if (percentageValue <= 40) {
    levelComponent = <RatingLevel title="Beginner" range="21% to 40%" value={percentageValue}/>;
  } else if (percentageValue <= 60) {
    levelComponent = <RatingLevel title="Intermediate" range="41% to 60%" value={percentageValue} />;
  } else if (percentageValue <= 80) {
    levelComponent = <RatingLevel title="Advanced" range="61% to 80%" value={percentageValue}/>;
  } else {
    levelComponent = <RatingLevel title="Expert" range="81% to 100%" value={percentageValue}/>;
  }

  return (
    <div>
      {levelComponent}
    </div>
  );
};

export default ExperienceRating;
