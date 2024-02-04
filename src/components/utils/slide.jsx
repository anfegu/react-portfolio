import React, { useState, useEffect, useRef } from 'react';
import * as data from "../../utils/data";

function Slide() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = data.skillsData
    .filter(skill => data.techIcons[skill.content])
    .map(skill => ({
      title: skill.content,
      svg: data.techIcons[skill.content],
      description: skill.description,
    }));

  const intervalRef = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    startInterval();

    return () => clearInterval(intervalRef.current);
  }, [slides.length, startInterval]);

  const handleArrowClick = (direction) => {
    setCurrentSlide(prevSlide => (prevSlide + direction + slides.length) % slides.length);
  };

  const handleHover = (isHovering) => {
    isHovering ? clearInterval(intervalRef.current) : startInterval();
  };

  const cardContainerStyle = {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out'
  };

  const arrowButtonStyle = {
    ...{
      position: 'absolute',
      top: '44%',
      fontSize: '1.5em',
      cursor: 'pointer',
      color: '#068',
    },
  };

  return (
    <div className="container" style={{position: 'relative'}}>
      <div style={{ ...arrowButtonStyle, left: 0 }} onClick={() => handleArrowClick(-1)}>
        &lt;
      </div>
      <div 
        className="slideContainerStyle" 
        onMouseEnter={() => handleHover(true)} 
        onMouseLeave={() => handleHover(false)}
      >
        <div style={{ ...cardContainerStyle, transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div className="card cardStyle" key={index}>
              {slide.svg && (
                <div className='slideSvgStyle'>
                  <div>
                    <h2 className="card-title" style={{ marginBottom: 0 }}>
                      {slide.title}
                    </h2>
                  </div>
                  <div style={{ marginLeft: '10px' }}>
                    {slide.svg}
                  </div>
                  
                </div>
              )}

              {slide.description && (
                <div className='slideDescStyle'>
                  <p className="card-text">
                    {slide.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div style={{ ...arrowButtonStyle, right: 0 }} onClick={() => handleArrowClick(1)}>
        &gt;
      </div>
    </div>
  );
}

export default Slide;
