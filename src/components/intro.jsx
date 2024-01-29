import React from "react";
import "./stars.scss";
import Typed from "react-typed";

function Intro() {
 
  return (
    <section id="home" className="intro route bg-image background">
      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="intro-title mb-5" role="presentation">
              <span className="t-headline" data-text="Hello, I'm Andres Felipe Gutierrez Fernandez">
                Hello, I'm Andres Felipe Gutierrez Fernandez
              </span>
            </h1>
            <br />
            <span className="sign">
              An<span className="fast-flicker">f</span>eg<span className="flicker">u</span>
            </span>
            <p className="intro-subtitle">
              <span className="text-slider-items"></span>
              <strong className="text-slider">
                <Typed
                  //ref={typedRef} // Use ref for potential control
                  strings={[
                    "Blockchain Proficient",
                    "Fullstack Developer",
                    "Senior Software Engineer",
                    "Financial Sector Specialist"
                  ]}
                  typeSpeed={80}
                  backDelay={1100}
                  backSpeed={30}
                  loop
                />
              </strong>
            </p>
            <p className="pt-3">
              <a
                className="btn js-scroll px-4 intro-btn"
                href="#contact"
                role="button"
                onClick={() => {
                  document.querySelector(".navbar-collapse").classList.remove("show");
                  document.querySelector(".navbar-toggler").classList.toggle("collapsed", true);
                  }
                }
              >
                Contact To Work
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
