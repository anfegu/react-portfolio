import React from "react";
import * as data  from "../utils/data";
import ExperienceRating from "./utils/xRating";
import Slide from "./utils/slide";

const About = () => {
  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="about-me pt-md-0">
                    <div className="title-box-2">
                      <h1 className="title-left">About Me</h1> 
                    </div>
                    <div className="float-md-right ml-md-2">
                      <img
                        src={require("../images/me.jpeg")}
                        alt="Anfegu"
                        className="intro-img"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div> 
                    <div>
                      {data.aboutMeData.map((content) => (
                        <p
                          style={{ textAlign: "justify" }}
                          className="lead"
                          key={content.id}
                        >
                          {content.content}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  
                  <div className="col-md-12" style={{ margin: "20px auto" }}>
                    <Slide />
                  </div>
                  
                  <div className="skill-mf">
                    {data.skillsData.map((skill) => (
                      <React.Fragment key={skill.id}>
                        <span style={{fontSize: "1.1rem"}} >{skill.content}</span>{" "}
                          <div>
                            <ExperienceRating 
                              yearsOfExperience={skill.years}
                              level={skill.level}
                            />
                          </div>
                      </React.Fragment>
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
