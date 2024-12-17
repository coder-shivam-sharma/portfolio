import React, { useRef, useState } from "react";
import "./Navi.css";
import { Link } from "react-scroll";
import {useGSAP} from "@gsap/react"
import gsap from "gsap"

function Navi() {
  const [isMobileMenuActive, setMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuActive(!isMobileMenuActive);
  };

  useGSAP(()=>{
    let tl = gsap.timeline()
    tl.from("nav h1",{
      y:-100,
      duration:1,
      opacity:0})
      
    tl.from(".desktop_menu li",{
      y:-100,
      duration:1,
      opacity:0,
      stagger:1})
  })

  return (
    <nav>
      <h1>PORTFOLIO</h1>

      {/* Desktop Menu */}
      <ul className="desktop_menu">
        <Link to="Home" activeClass="Active" spy={true} smooth={true} duration={500}>
          <li>Home</li>
        </Link>
        <Link to="About" activeClass="Active" spy={true} smooth={true} duration={500}>
          <li>About</li>
        </Link>
        <Link to="Experience" activeClass="Active" spy={true} smooth={true} duration={500}>
          <li>Experience</li>
        </Link>
        <Link to="Project" activeClass="Active" spy={true} smooth={true} duration={500}>
          <li>Projects</li>
        </Link>
        <Link to="Contact" activeClass="Active" spy={true} smooth={true} duration={500}>
          <li>Contact Me</li>
        </Link>
      </ul>

      {/* Hamburger Icon */}
      <div className={`hamburger ${isMobileMenuActive ? "active" : ""}`}
        onClick={toggleMobileMenu}>
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>

      {/* Mobile Menu */}
      <ul className={`mobile_menu ${isMobileMenuActive ? "activemobile" : ""}`}>
        <Link to="Home" activeClass="Active" spy={true} smooth={true} duration={500}>
          <li>Home</li>
        </Link>
        <Link to="About" activeClass="Active" spy={true} smooth={true} duration={500}>
          <li>About</li>
        </Link>
        <Link to="Experience" activeClass="Active" spy={true} smooth={true} duration={500}>
          <li>Experience</li>
        </Link>
        <Link to="Project" activeClass="Active" spy={true} smooth={true} duration={500}>
          <li>Projects</li>
        </Link>
        <Link to="Contact" activeClass="Active" spy={true} smooth={true} duration={500}>
          <li>Contact Me</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navi;
