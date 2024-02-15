import React, { useState } from "react";
import * as data from "../utils/data";
import ExperienceRating from "./utils/xRating";
import Slide from "./utils/slide";
import meImage from "../images/me.jpeg";

const About = () => {
  const [expandedState, setExpandedState] = useState([]);
  const isMobile = window.innerWidth <= 768;

  // Function to toggle expansion for a specific paragraph
  const toggleExpansion = (index) => {
    const newExpandedState = [...expandedState];
    newExpandedState[index] = !newExpandedState[index];
    setExpandedState(newExpandedState);
  };

  // Truncate the content if it exceeds the maximum length
  const truncateContent = (content) => {
    const maxLength = 30; // Adjust the maximum length as needed
    return content.length > maxLength ? content.slice(0, maxLength) + "..." : content;
  };

  return (
    <section id="about" className="about-mf sect-pt4 route">
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
                    {data.aboutMeData.map((content, index) => (
                      <p
                        style={{ textAlign: isMobile ? "center" : "justify" }}
                        className="lead"
                        key={index}
                      >
                        {isMobile && (
                          <>
                            {expandedState[index] || content.content.length <= 30
                              ? content.content
                              : truncateContent(content.content)}
                            <span
                              style={{ 
                                color: "#089",
                                fontSize: "1.8rem",
                                verticalAlign: "middle",
                                
                            
                              }}
                              onClick={() => toggleExpansion(index)}
                            >
                              {" "}
                              {expandedState[index] ? <i className="ion-toggle-filled"></i> : <i className="ion-toggle"></i> }
                            </span>
                          </>
                        )}
                        {!isMobile && content.content}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="col-md-6">
                  <div style={{ margin: "20px 0" }}>
                    <Slide />
                  </div>
                  <div className="skill-mf">
                    {data.skillsData.map((skill) => (
                      <div key={skill.id}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontSize: "1rem",
                          }}
                        >
                          <span style={{ fontWeight: "bolder" }}>
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

export default About;
