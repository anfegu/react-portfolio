import React, { useState } from 'react';
//components
import Typed from 'react-typed';
import Sparkles from '../../common/Sparkle';
//services
import {getLevelWeight, getExperienceWeight, getCareerRating} from '../../../services';

const RatingLevel = ({ title, value, isHovered, years }) => {
  const formattedString = `${title} - Experience: <h5> ~&nbsp;${years} years </h5>`;
  const textWidth = isHovered ? value : 0;
  return (
    <div className={`rating-level ${isHovered ? 'hovered' : ''}`}>
      <div className="overlay-bar" style={{ width: `${textWidth}%` }}></div>
      {isHovered && (
        <Sparkles>
          <Typed     
              strings={[formattedString]}
              typeSpeed={10}
              className='rating-type'    
          />
        </Sparkles>
      )}
    </div>
  );
};

const calculateSkillValues = (yearsOfExperience, level) => 
  (getLevelWeight[level] + 
  getExperienceWeight(yearsOfExperience) +
  getCareerRating()) / 3;

const ExperienceRating = ({ yearsOfExperience, level }) => {
  const [isHovered, setIsHovered] = useState(false);
  const percentageValue = calculateSkillValues(yearsOfExperience, level);
  const getRatingTitle = () => {
    if (percentageValue <= 20) return 'Novice';
    if (percentageValue <= 40) return 'Beginner';
    if (percentageValue <= 60) return 'Intermediate';
    if (percentageValue <= 80) return 'Advanced';
    return 'Expert';
  };

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <RatingLevel
        title={getRatingTitle()}
        value={percentageValue}
        isHovered={isHovered}
        years={yearsOfExperience}
      />
    </div>
  );
};

export default ExperienceRating;
