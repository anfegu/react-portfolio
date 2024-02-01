import React, { useState } from 'react';
import { Sparkles } from './sparkle';
import * as data from '../../utils/data';
import Typed from 'react-typed';

const RatingLevel = ({ title, value, isHovered, years }) => {
  const formattedString = `${title} - Experience: <h5> ~&nbsp;${years} years </h5>`;
  const textWidth = isHovered ? value : 0;
  return (
    <div className={`rating-level ${isHovered ? 'hovered' : ''}`}>
      <div className="overlay-bar" style={{ width: `${textWidth}%` }}></div>
      {isHovered && (
        <Sparkles>
          <div className="rating-level-title"> 
            <Typed     
                strings={[
                  formattedString
                ]}
                typeSpeed={25}    
                style={{alignItems: "baseline", display: "flex", justifyContent: "center"}}
            />
           </div>
         {/*  <div className="rating-level-title" dangerouslySetInnerHTML={{ __html: formattedString }}>
          {`${title} ${'\u00A0'.repeat(Math.round(value) - 43)} Exp: <b>${years}</b>  years`}
         </div> */}
        </Sparkles>
      )}
    </div>
  );
};

const calculateSkillValues = (yearsOfExperience, level) => 
  (data?.getLevelWeight[level] + 
  data?.getExperienceWeight(yearsOfExperience) +
  data?.getCareerRating()) / 3;

const ExperienceRating = ({ yearsOfExperience, level }) => {
  const [isHovered, setIsHovered] = useState(false);
  const percentageValue = calculateSkillValues(yearsOfExperience, level);
  return (
    <div onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      <RatingLevel
        title={
          percentageValue <= 20
            ? 'Novice'
            : percentageValue <= 40
            ? 'Beginner'
            : percentageValue <= 60
            ? 'Intermediate'
            : percentageValue <= 80
            ? 'Advanced'
            : 'Expert'
        }
        value={percentageValue}
        isHovered={isHovered}
        years={yearsOfExperience}
      />
    </div>
  );
};

export default ExperienceRating;
