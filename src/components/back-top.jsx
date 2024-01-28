/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import $  from 'jquery';

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

  const scrollToTop = (event) => {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  };

  return (
    <a
      href="#"
      className={`back-to-top animated ${isVisible ? 'fadeIn' : 'fadeOut'}`}
      style={{ display: isVisible ? 'block' : 'none' }}
      onClick={scrollToTop}
      aria-label='Scroll To Top'
    >
      <i className="fa fa-chevron-up"></i>
    </a>
  );
};

export default BackToTop;
