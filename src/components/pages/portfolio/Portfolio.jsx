import React, { useState } from "react";
import Modal from "react-modal";
//components
import FlippableCard from "./FlippableCard.tsx";
import { Backg } from "./Background.tsx"; //enviar paramétricamente por cada NO proyecto tratar de atar a colores random
//services
import { categories } from "../../../services";

export const Portfolio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const openModal = (category) => {
    setSelectedCategory(category);
    setModalIsOpen(true);
    document.body.style.overflow = "hidden";
    if (window.innerWidth > 768) {
      window.scrollTo({
        top: document.getElementById("work").offsetTop - 90,
      });
    }
  };

  const closeModal = () => {
    setSelectedCategory(null);
    setModalIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h1 className="title-a">Portfolio</h1>
              <p className="subtitle-a">
                Here are some practical examples of my work. No frills, just a
                peek into some projects, functional simulators, work history,
                and certifications that have shaped my tech skills.
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row" style={{ justifyContent: "center" }}>
          {categories.map((category) => (
            <div className="col-md-4" key={category.id}>
              <div className="work-box">
                <button
                  style={{ border: "none" }}
                  onClick={() => openModal(category)}
                >
                  <div className="work-img">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: category[`svg${category.id}`],
                      }}
                    />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">{category.title}</h2>
                        <div className="w-more">
                          <span className="w-ctegory">{category.type}</span>
                          <p className="w-technologies">
                            {category.technologies}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: "55%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            width: "50vh",
            height: "30vh",
            overflow: "visible", // Enable scrolling if content overflows
            position: "fixed",
            backgroundColor: "transparent",
            border: "none",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1000,
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          },
        }}
      >
        <div>
          {selectedCategory &&
            selectedCategory.projects.map((project, index) => (
              <FlippableCard
                key={index}
                xOffset={index % 2 === 0 ? -0.34 : 0.34}
                yOffset={index < 2 ? -0.26 : 0.29}
                category={selectedCategory}
                cardNo={index}
              >
                {project.srcScreen ? (
                  <video
                    autoPlay
                    loop
                    muted
                    controls
                    style={{
                      overflow: "visible",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "auto",
                      height: "auto",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                  >
                    <source type="video/webm" src={project.srcScreen} />
                  </video>
                ) : project.component ? (
                  <project.component {...project?.componentProps} />
                ) : (
                  <Backg />
                )}
              </FlippableCard>
            ))}
        </div>
      </Modal>
    </section>
  );
};
