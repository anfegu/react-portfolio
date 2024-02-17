import React, { useEffect } from 'react';

function Preloader() {
  useEffect(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.style.opacity = 0; // Fade out
        setTimeout(() => {
          preloader.remove(); // Remove from DOM
        }, 400); // Adjust timing for 'slow' fade
      }, 100);
    }
  }, []); // Run effect only once after component mounts

  return <div id="preloader"></div>;
}

export default Preloader;
