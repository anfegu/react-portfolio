import * as data from "../utils/data";
import ExperienceRating from "./utils/xRating";
import Slide from "./utils/slide";
import meImage from "../images/me.jpeg";

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
                    <img
                      src={meImage}
                      alt="Anfegu"
                      className="intro-img img-about img-fluid"
                    />
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
                <div className="col-md-6">
                  <div style={{ margin: "20px 0" }}>
                    <Slide />
                  </div>
                  <div className="skill-mf">
                    {data.skillsData.map((skill) => (
                      <div key={skill.id}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1rem"}}>
                          <span style={{fontWeight: "bolder" }}>{skill.content}</span>
                          <span style={{fontWeight: "light"}}> {skill.type}</span>
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
