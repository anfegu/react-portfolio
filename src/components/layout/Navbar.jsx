import React, { useState, useEffect, useRef } from "react";
import Sparkles from "../common/Sparkle";
import Boop from "../common/Boop";
import logo1 from "../../assets/images/logo1.png";
import logo2 from "../../assets/images/logo.png";

export const Navbar = () => {
  const [logo, setLogo] = useState(logo1);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById(e.target.hash?.slice(1));
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - (window.innerWidth < 768 ? 70 : 90),
      });
      // eslint-disable-next-line no-restricted-globals
      history.replaceState({}, "", e.target.hash);
      setMobileMenuOpen(false); // Close the mobile menu after clicking a link
    }
  };

  const handleToggleClick = () => {
    
    setMobileMenuOpen(!isMobileMenuOpen);
    const navbarElement = navbarRef.current;

    if (window.innerWidth < 768) {
      // Only toggle the menu if the screen width is less than 768 pixels
      navbarElement.classList.toggle("mobile-menu");
      const isMobileMenu = navbarElement.classList.contains("mobile-menu");
      const isReduced = isMobileMenu || window.pageYOffset > 50;
      
      navbarElement.classList.toggle("navbar-reduce", isReduced);
      navbarElement.classList.toggle("navbar-trans", !isMobileMenu && !isReduced);

      setLogo(isReduced ? logo2 : logo1);
      if (!isMobileMenu && isReduced) {
        setMobileMenuOpen(!isMobileMenuOpen);
      }
    } else {
      navbarElement.classList.add("navbar-reduce");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbarElement = navbarRef.current;
      const isReduced = window.pageYOffset > 50;

      if (window.pageYOffset < 150) {
        document.querySelector(".nav-link[href='#home']").classList.add("active");
        document.querySelector(".nav-link[href='#about']").classList.remove("active");
        // eslint-disable-next-line no-unused-expressions
        navbarElement.classList.contains("mobile-menu") ? navbarElement.classList.remove("mobile-menu") : null;
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
        document.querySelectorAll("section").forEach((section) => {
          observer.observe(section);
        });
      }

      navbarElement.classList.toggle("navbar-reduce", isReduced);
      navbarElement.classList.toggle("navbar-trans", !isReduced);
      setLogo(isReduced ? logo2 : logo1);
      setMobileMenuOpen(navbarElement.classList.contains(".navbar-collapse.show"));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <nav
      className="navbar navbar-b navbar-trans navbar-expand-lg fixed-top"
      id="mainNav"
      ref={navbarRef}
    >
      <div className="container">
        {logo === logo1 ? (
          <Boop scale="1.7" rotation="1080" timing="5000">
            <Sparkles>
              <img src={logo} alt="logo"/>
            </Sparkles>
          </Boop>
        ) : (
          <Boop scale="1.3" rotation="0" timing="1000">
            <a href="#page-top">
              <img src={logo} alt="logo"/>
            </a>
          </Boop>
        )}

        <div
          className={`navbar-toggler collapsed border-0`}
          aria-controls="navbarDefault"
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={handleToggleClick}
        >
           {isMobileMenuOpen ? (
              <i className="ion-close-round" 
              style={
                {fontSize: "40px", 
                 color: navbarRef.current?.classList.contains("navbar-trans") ? '#eee' : '#1B1B1B'
                }
              }
              />
            ) : (
              <i className="ion-navicon-round" 
                style={
                  {fontSize: "50px", 
                   color: navbarRef.current?.classList.contains("navbar-reduce") ? '#1B1B1B' : '#eee'
                  }
                }
              />
            )}
        </div>

        <div
          className={`navbar-collapse collapse justify-content-end ${
            isMobileMenuOpen ? "show" : ""
          }`}
          id="navbarDefault"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link js-scroll active"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link js-scroll"
                href="#about"
                onClick={document.documentElement.lang === 'en' ? handleSmoothScroll: null}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link js-scroll"
                href="#work"
                onClick={document.documentElement.lang === 'en' ? handleSmoothScroll: null}
              >
                Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" 
                 href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

