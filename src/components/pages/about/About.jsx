import React, { useState, useEffect, useRef } from "react";
//components
import ExperienceRating from "./Rating";
import Slide from "./Slide";
//assets
import meImage from "../../../assets/images/me.jpeg";
//services
import {aboutMeData, skillsData} from '../../../services'

export const About = () => {
  const [expandedState, setExpandedState] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 
  const aboutRef = useRef(null); // Reference to the about section

  // Function to toggle expansion for a specific paragraph (english)
  const toggleExpansion = (index) => {
    const newExpandedState = [...expandedState];
    newExpandedState[index] = !newExpandedState[index];
    setExpandedState(newExpandedState);
  };

  // Truncate the content if it exceeds the maximum length (english)
  const truncateContent = (content) => {
    const maxLength = 30; // Adjust the maximum length as needed  
    return content.length > maxLength ? content.slice(0, maxLength) + "..." : content;
  };

  // Function to handle window resize % language change
  useEffect(() => {
    const handleResizeAndLang = () => {
      document.documentElement.lang === 'en' ? setIsMobile(window.innerWidth <= 768) : setIsMobile(false);
    };

    handleResizeAndLang();

    const langChangeObserver = new MutationObserver(handleResizeAndLang);
    langChangeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang'],
    });

    window.addEventListener("resize", handleResizeAndLang);

    return () => {
      window.removeEventListener("resize", handleResizeAndLang);
      langChangeObserver.disconnect();
    };
  }, []);

  return (
    <section id="about" className="about-mf sect-pt4 route" ref={aboutRef}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="about-mf pt-md-0">
                    <div className="title-box-1">
                      <h1 className="title-left">About Me</h1>
                    </div>
                    <img
                      src={meImage}
                      alt="Anfegu"
                      className="intro-img img-about img-fluid"
                    />
                    {aboutMeData.map((content, index) => (
                      <p
                        style={{ textAlign: isMobile ? "center" : "justify" }}
                        className="lead"
                        key={index}
                        
                      >
                         {(isMobile && content.content.length > 30)  ? (
                          <>
                            {
                              expandedState[index] || content.content.length <= 30 
                              ? content.content : truncateContent(content.content)
                            }
                            <span style={{ color: "#089", fontSize: "1.8rem", verticalAlign: "middle" }} onClick={() => toggleExpansion(index)}>
                              {expandedState[index] ? <i className="ion-toggle-filled"></i> : <i className="ion-toggle"></i>}
                            </span>
                          </>
                        ) : content.content}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="col-md-6">
                  <div style={{ margin: "20px 0" }}>
                    <Slide />
                  </div>
                  <div className="skill-mf">
                    {skillsData.map((skill) => (
                      <div key={skill.id}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontSize: "1rem",
                          }}
                        >
                          <span style={{ fontWeight: "bolder" }} translate="no">
                            {skill.content}
                          </span>
                          <span style={{ fontWeight: "light" }}>
                            {" "}
                            {skill.type}
                          </span>
                        </div>
                        <ExperienceRating
                          yearsOfExperience={skill.years}
                          level={skill.level}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

