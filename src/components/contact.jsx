import React, { useState, useEffect } from "react";
import imageOverlay from "../images/earth.jpg";
import validator from "validator";
import emailjs from 'emailjs-com';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (validator.isEmpty(formData.name)) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!validator.isEmail(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (validator.isEmpty(formData.subject)) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (validator.isEmpty(formData.message)) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    if (validateForm()) {
      try {
        await emailjs.send(serviceID, templateID, formData, userID);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: formData.name, email: formData.email }), 1000));

        toast.promise(promise, {
          loading: 'Sending...',
          success: (data) => {
            return `Received! Thanks ${data.name}, I'll contact you soon! at ${data.email}`;
          },
          error: 'Error',
        });
        setTimeout(() => {
          window.location.reload();
          window.location.replace('/#home');
        }, 5000);
       
      } catch (error) {
        toast.error("Error sending email, please try again later.");
        console.error(error);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } else {
      console.error("Form validation failed");
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Reset errors when clicking outside the form
      if (!e.target.closest(".contactForm")) {
        setErrors({});
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  
  return (
    <section
      id="contact"
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: `url(${imageOverlay})` }}
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h1 className="title-left">Send A Message</h1>
                    </div>
                    <div>
                      <form onSubmit={handleSubmit} className="contactForm">
                        <div id="sendmessage">Your message has been sent. Thank you!</div>
                        <div id="errormessage">{errors.email}</div>
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                id="name"
                                placeholder="Your Name"
                                onChange={handleChange}
                              />
                              <div className="invalid-feedback">{errors.name}</div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                onChange={handleChange}
                              />
                              <div className="invalid-feedback">{errors.email}</div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                onChange={handleChange}
                              />
                              <div className="invalid-feedback">{errors.subject}</div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <textarea
                                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                                name="message"
                                rows="5"
                                placeholder="Message"
                                onChange={handleChange}
                              ></textarea>
                              <div className="invalid-feedback">{errors.message}</div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button
                              type="submit"
                              className="button button-a button-big button-rouded"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h1 className="title-left">Get in Touch</h1>
                    </div>
                    <div className="more-info">
                      <p style={{ textAlign: window.innerWidth > 768 ? "justify" : "center" }} className="lead">
                      Feel free to reach out for project discussions, collaboration 
                      opportunities, or any inquiries related to our potential partnership. 
                      <br/>Looking forward to connecting with you. For more details, explore my links below.
                      </p>
                    </div>
                    <div className="socials text-center d-sm-flex">
                      <ul>
                        <li>
                          <a
                            href="https://www.linktree.com/anfegu/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Linktree"
                          >
                            <span className="ico-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m13.736 5.853l4.005-4.117l2.325 2.38l-4.2 4.005h5.908v3.305h-5.937l4.229 4.108l-2.325 2.334l-5.74-5.769l-5.741 5.769l-2.325-2.325l4.229-4.108H2.226V8.121h5.909l-4.2-4.004l2.324-2.381l4.005 4.117V0h3.472zm-3.472 10.306h3.472V24h-3.472z"/></svg>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/anfegu"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                          >
                            <span className="ico-circle">
                              <i className="ion-social-github"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/anfegu/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                          >
                            <span className="ico-circle">
                              <i className="ion-social-linkedin"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.buymeacoffee.com/anfegu/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Linktree"
                          >
                            <span className="ico-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379c-.197-.069-.42-.098-.57-.241c-.152-.143-.196-.366-.231-.572c-.065-.378-.125-.756-.192-1.133c-.057-.325-.102-.69-.25-.987c-.195-.4-.597-.634-.996-.788a5.723 5.723 0 0 0-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 0 0-3.7.062c-.915.083-1.88.184-2.75.5c-.318.116-.646.256-.888.501c-.297.302-.393.77-.177 1.146c.154.267.415.456.692.58c.36.162.737.284 1.123.366c1.075.238 2.189.331 3.287.37c1.218.05 2.437.01 3.65-.118c.299-.033.598-.073.896-.119c.352-.054.578-.513.474-.834c-.124-.383-.457-.531-.834-.473c-.466.074-.96.108-1.382.146c-1.177.08-2.358.082-3.536.006a22.228 22.228 0 0 1-1.157-.107c-.086-.01-.18-.025-.258-.036c-.243-.036-.484-.08-.724-.13c-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 0 1 3.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145c.392.085.895.113 1.07.542c.055.137.08.288.111.431l.319 1.484a.237.237 0 0 1-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 0 1-4.743.295a37.059 37.059 0 0 1-4.699-.304c-.14-.017-.293-.042-.417-.06c-.326-.048-.649-.108-.973-.161c-.393-.065-.768-.032-1.123.161c-.29.16-.527.404-.675.701c-.154.316-.199.66-.267 1c-.069.34-.176.707-.135 1.056c.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0 0 11.343.376a.483.483 0 0 1 .535.53l-.071.697l-1.018 9.907c-.041.41-.047.832-.125 1.237c-.122.637-.553 1.028-1.182 1.171c-.577.131-1.165.2-1.756.205c-.656.004-1.31-.025-1.966-.022c-.699.004-1.556-.06-2.095-.58c-.475-.458-.54-1.174-.605-1.793l-.731-7.013l-.322-3.094c-.037-.351-.286-.695-.678-.678c-.336.015-.718.3-.678.679l.228 2.185l.949 9.112c.147 1.344 1.174 2.068 2.446 2.272c.742.12 1.503.144 2.257.156c.966.016 1.942.053 2.892-.122c1.408-.258 2.465-1.198 2.616-2.657c.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 0 1 .39-.426c.402-.078.787-.212 1.074-.518c.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233c-2.416.359-4.866.54-7.308.46c-1.748-.06-3.477-.254-5.207-.498c-.17-.024-.353-.055-.47-.18c-.22-.236-.111-.71-.054-.995c.052-.26.152-.609.463-.646c.484-.057 1.046.148 1.526.22c.577.088 1.156.159 1.737.212c2.48.226 5.002.19 7.472-.14c.45-.06.899-.13 1.345-.21c.399-.072.84-.206 1.08.206c.166.281.188.657.162.974a.544.544 0 0 1-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 0 1-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38c0 0 1.243.065 1.658.065c.447 0 1.786-.065 1.786-.065c.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 0 0-1.322-.238c-.826 0-1.491.284-2.26.613"/></svg>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
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

export default Contact;
