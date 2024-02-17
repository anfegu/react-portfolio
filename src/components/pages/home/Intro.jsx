import React from "react";
import Typed from "react-typed";
import "../../../styles/stars.scss";

export const Intro = () => {
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
