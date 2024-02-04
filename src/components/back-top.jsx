/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a
      href="#"
      className={`back-to-top animated ${isVisible ? 'fadeIn' : 'fadeOut'}`}
      style={{ display: isVisible ? 'block' : 'none' }}
      aria-label='Scroll To Top'
      onClick={() => {
        document.querySelector(".navbar-collapse").classList.remove("show");
        document.querySelector(".navbar-toggler").classList.toggle("collapsed", true);
      }}
    >
      <i className="ion-chevron-up" style={{ fontSize: '36px' }}></i>
    </a>
  );
};

export default BackToTop;
