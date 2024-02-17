import React, { useState} from "react";
// external services
import emailjs from 'emailjs-com';
import { toast } from 'sonner';
//components
import Socials from "./Socials";
//assets
import imageOverlay from "../../../assets/images/earth.jpg";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, REACT_APP_EMAILJS_USER_ID} = process.env;

    try {
      await emailjs.send(REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, formData, REACT_APP_EMAILJS_USER_ID);

      const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: formData.name, email: formData.email }), 1000));

      toast.promise(promise, {
        loading: 'Sending...',
        success: (data) => `Received! Thanks ${data.name}, I'll contact you soon! at ${data.email}`,
        error: 'Error',
      });
      setTimeout(() => {
        window.location.reload();
        window.location.replace('/#home');
      }, 5000);
      
    } catch (error) {
      toast.error("Error sending email, please try again later.");
      setTimeout(() => window.location.reload(), 2000);
    }
 
  };

  return (
    <section
      id="contact"
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: `url(${imageOverlay})`}}
    >
      <div className="overlay-mf" ></div>
      <div className="container" >
        <div className="row">
          <div className="container-fluid col-lg-10" >
            <div className="contact-mf contact-container" >
              <div className="box-shadow-full contact-card-body">
               
                  <div className="card-side side-back" >
                    <div className="title-box-2" style={{ textAlign: "left"}}>
                      <h1 className="title-left" >Send A Message</h1>
                    </div>
                    <div>
                      <form onSubmit={handleSubmit} className="contactForm">
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <fieldset>
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                onChange={handleChange}
                                required
                              />
                              </fieldset>
                              
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <fieldset>
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                onChange={handleChange}
                                required
                              />
                              </fieldset>
                              
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <fieldset>
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                onChange={handleChange}
                                required
                              />
                              </fieldset>
                              
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <fieldset>
                              <textarea
                                className="form-control"
                                name="message"
                                rows="5"
                                style={{ overflowY: 'auto', resize: 'none'}}
                                id="message"
                                placeholder="Message"
                                onChange={handleChange}
                                required
                              ></textarea>
                              </fieldset>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <fieldset>
                            <button
                              type="submit"
                              className="button button-a button-big button-rouded"
                            >
                              Send Message
                            </button>
                            </fieldset>
                          </div>
                        </div>
                      </form>
                    </div>
                    <br/><span className="lead">
                        I look forward to connecting with you. More information:
                    </span>
                    <Socials />
                  </div>

                  <div className="card-side side-front">
                    <div className="title-box-2">
                      <h1 className="title-left ">Get in Touch</h1>
                    </div>
                    <p style={{ textAlign: "center", fontSize:  "3vh"}} className="lead">
                      Feel free to reach out for project discussions, collaboration 
                      opportunities, or any inquiries related to our potential partnership. 
                    </p>
                    <p style={{ textAlign: "center", fontSize: "3vh", fontWeight: "bold"}}> 
                      <i className="ion-android-hand"></i> Tap or hover here to send a message and get more details <i className="ion-android-open"></i>
                      <br/><i className="ion-android-hangout" style={{ fontSize: "12vh", color: "#068", opacity: 0.8, marginTop: "2vh"}}></i>
                    </p>
                  </div>  

              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
                <p>&copy; 2024 Anfegu. All rights reserved on modifications made to the forked repository.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

