import React, { useState, useEffect } from 'react';
import * as data  from "../../utils/data";

function Slide() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
        {
            title: 'TECH SKILLS',
            svgTitle: data.techIcons["Title"],
        }
    ]

  for (let i = 0; i < data.skillsData.length; i++) {
    if (!data.techIcons[data.skillsData[i].content]) {
      continue;
    }
    slides.push({
    title: data.skillsData[i].content,
    svg: data.techIcons[data.skillsData[i].content],
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePreviousClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const slideContainerStyle = {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  };

  const cardContainerStyle = {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
    transform: `translateX(-${currentSlide * 100}%)`,
  };

  const cardStyle = {
    flex: '0 0 100%',
    minWidth: '100%',
    border: 'none',
    boxSizing: 'border-box',
    alignItems: 'center',
   
  };

  const arrowButtonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    fontSize: '1.5em',
    cursor: 'pointer',
    color: '#068', // Adjust color as needed
  };

  const leftArrowStyle = {
    ...arrowButtonStyle,
    left: '10px',
  };

  const rightArrowStyle = {
    ...arrowButtonStyle,
    right: '10px',
  };

  return (
    <div className="container mx-auto">
    <div style={leftArrowStyle} onClick={handlePreviousClick}>
      &lt;
    </div>
    <div style={slideContainerStyle}>
      <div style={cardContainerStyle}>
        {slides.map((slide, index) => (
          <div key={index} style={cardStyle} className="card">
            {slide.svgTitle && (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginLeft: '20px' }}>
                    {slide.svgTitle}
                </div>
                <div className="card-body">
                  <h1 className="card-title">{slide.title}</h1>
                </div>
              </div>
            )}
            {slide.svg && (
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                <div style={{ marginRight: '20px' }}>
                    {slide.svg}
                </div>
                <div>
                    <h2 className="card-title" style={{ marginBottom: 0 }}>
                    {slide.title}
                    </h2>
                </div>
            </div>
          )}
          
          {slide.description && (
            <div>
              <p className="card-text">
                <strong>Level:</strong> {slide.description} ({slide.level * 10}%)
                <br />
                <strong>Experience:</strong> {slide.experience} years
              </p>
            </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <div style={rightArrowStyle} onClick={handleNextClick}>
      &gt;
    </div>
  </div>
  );
}

export default Slide;
