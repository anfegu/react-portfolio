import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";
import { Sparkles } from "./utils/sparkle";
import Boop from "./utils/boop";
import logo1 from "../img/logo1.png";
import logo2 from "../img/logo.png";

const Navbar = () => {
  const [logo, setLogo] = useState(logo1);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbarElement = navbarRef.current;

      if (window.pageYOffset > 50) {
        navbarElement.classList.add("navbar-reduce");
        navbarElement.classList.remove("navbar-trans");
        setLogo(logo2);
      } else {
        navbarElement.classList.add("navbar-trans");
        navbarElement.classList.remove("navbar-reduce");
        setLogo(logo1);
      }
    };

    const handleNavClick = () => {
      $(".navbar-collapse").collapse("hide");
    };

    const handleSmoothScroll = (e) => {
      e.preventDefault();

      const target = $(e.target.hash);

      if (target.length) {
        const offset = target.offset().top - (window.innerWidth < 768 ? 70 : 90);

        $("html, body").animate(
          {
            scrollTop: offset,
          },
          1000,
          "easeInExpo"
        );
      }
    };

    const handleToggleClick = () => {
      const navbarElement = navbarRef.current;

      if (window.innerWidth < 768) {
        // Only toggle the menu if the screen width is less than 768 pixels
        navbarElement.classList.toggle("mobile-menu");

        // Change the logo based on the mobile menu state
        if (navbarElement.classList.contains("mobile-menu")) {
          navbarElement.classList.add("navbar-reduce");
          navbarElement.classList.remove("navbar-trans");
          setLogo(logo2); // Use the mobile menu logo
        } else {
          // Change the logo based on the scroll position when the menu is closed
          if (window.pageYOffset > 50) {
            setLogo(logo2);
          } else {
            navbarElement.classList.add("navbar-trans");
            navbarElement.classList.remove("navbar-reduce");
            setLogo(logo1);
          }
        }
      } else if (!navbarElement.classList.contains("navbar-reduce")) {
        navbarElement.classList.add("navbar-reduce");
      }
    };

    $("body").scrollspy({
      target: "#mainNav",
      offset: navbarRef.current?.offsetHeight || 0,
    });

    window.addEventListener("scroll", handleScroll);

    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", handleSmoothScroll);
    $(".js-scroll").on("click", handleNavClick);
    $(".navbar-toggler").on("click", handleToggleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      $('a.js-scroll[href*="#"]:not([href="#"])').off("click", handleSmoothScroll);
      $(".js-scroll").off("click", handleNavClick);
      $(".navbar-toggler").off("click", handleToggleClick);
    };
  }, []); 

  return (
    <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav" ref={navbarRef}>
      <div className="container">
        
        {logo === logo1 ? (
          <Boop scale='1.8' rotation='1080' timing='5000' ><Sparkles>
            <img src={logo} alt="logo" style={{ maxWidth: "100px" }} />
          </Sparkles></Boop>
        ) : (
          <Boop scale='0' rotation='360' timing='10' ><a href="#page-top"><img src={logo} alt="logo" style={{ maxWidth: "100px" }} /></a></Boop>
        )}
        
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarDefault"
          aria-controls="navbarDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll active" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#work">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
