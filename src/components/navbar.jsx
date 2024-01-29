import React, { useState, useEffect, useRef } from "react";
import { Sparkles } from "./utils/sparkle";
import Boop from "./utils/boop";
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo.png";

const Navbar = () => {
  const [logo, setLogo] = useState(logo1);
  const navbarRef = useRef(null);

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById(e.target.hash.slice(1));
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - ( window.innerWidth < 768 ? 70 : 90),
      });
    }
  };

  const handleToggleClick = () => {

    const navbarElement = navbarRef.current;

    if (window.innerWidth < 768) {
      // Only toggle the menu if the screen width is less than 768 pixels
      navbarElement.classList.toggle("mobile-menu");
      
      // Change the logo based on the mobile menu state
      if (navbarElement.classList.contains("mobile-menu")) {
      //if (isNavOpen) {
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
  
  const handleNavClick = () => {
    navbarRef.current.querySelector(".navbar-collapse")
      .classList.toggle("show");
    document.querySelector(".navbar-toggler").classList.toggle("collapsed");
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const navbarElement = navbarRef.current;
    
      if (window.pageYOffset === 0) {
        document.querySelector(".nav-link[href='#home']").classList.add("active");
        document.querySelector(".nav-link[href='#about']").classList.remove("active");
      } else {
       
        // Intersection Observer setup for section tracking
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              
              if (entry.isIntersecting) {
                // Add logic to highlight corresponding navigation link
                document.querySelectorAll(".nav-link").forEach((link) => {
                  link.classList.remove("active");
                  if (link.getAttribute("href") === `#${entry.target.id}`) {
                    link.classList.add("active");
                  }
                });
              }
            });
          },
          { rootMargin: `-${navbarRef.current?.offsetHeight || 0}px 0px 0px 0px` }
        );

        // Observe each section
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
          observer.observe(section);
        });
      }

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

    window.addEventListener("scroll", handleScroll);
    document.querySelector(".navbar-nav").addEventListener("click", handleNavClick);
    //$(".js-scroll").on("click", handleNavClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
     document.querySelector(".navbar-nav").removeEventListener("click", handleNavClick);
      //$(".js-scroll").off("click", handleNavClick);
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
          onClick={handleToggleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll active" href="#home" >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#about" onClick={handleSmoothScroll}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#work" onClick={handleSmoothScroll}>
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
