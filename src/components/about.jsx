import React, { useEffect } from "react";
import { skillsData, aboutMeData, careerYears } from "../utils/data";
const About = () => {
  const calculateSkillValues = (yearsOfExperience, level) => {
    const experiencePercentage = (Math.min(yearsOfExperience, careerYears) / careerYears) * 0.5 * 100;
    const levelPercentage = (Math.min(level, 4) / 4) * 0.5 * 100;

    const totalValue= experiencePercentage + levelPercentage;
    
    return { porcentage: `${totalValue.toFixed(2)}%`, totalValue };
  };

  useEffect(() => {
    skillsData.map(({ years, level, ...rest }) => {
      return {
        ...rest,
        ...calculateSkillValues(years, level),
      };
    });
  }, []);

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
                      {aboutMeData.map((content) => (
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
                  <div className="row">
                    <div className="col-sm-6 col-md-5" style={{ margin: "0 auto" }}>
                      <div className="about-img" style={{ textAlign: "center" }}>
                        <img className="img-fluid rounded b-shadow-a" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf">
                    {skillsData.map((skill) => (
                      <React.Fragment key={skill.id}>
                        <div className="progress-cover"> 
                          <span>{skill.content}</span>{" "}
                          <span className="pull-right">{calculateSkillValues(skill.years, skill.level).porcentage}</span>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: calculateSkillValues(skill.years, skill.level).porcentage }}
                              aria-valuenow={skill.level}
                              aria-valuemin="0"
                              aria-valuemax="100"
                              aria-label="{skill.content} - {calculateSkillValues(skill.years, skill.level).porcentage}"
                            ></div>
                          </div>
                          <div className="progress-trans">
                            <div>
                              {/*  Here the details about each skills */}
                              <p> Test Content</p>
                            </div>
                          </div>
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
