import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);
  // const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate = useNavigate();
  const openNav = () => {
    setNav(!nav);
  };

  const [showSubnav, setShowSubnav] = useState(false);
  const [showSubnav1, setShowSubnav1] = useState(false);

  const handleMouseEnterService = () => {
    setShowSubnav(true);
  };

  const handleMouseLeaveService = () => {
    setShowSubnav(false);
  };
  const handleMouseEnterService1 = () => {
    setShowSubnav1(true);
  };

  const handleMouseLeaveService1 = () => {
    setShowSubnav1(false);
  };
  const handleContactClick = () => {
    navigate("/contact");
  };
  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          Clinics4Health <span className="navbar-sign">+</span>
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <a
            href="#services"
            className="navbar-links service"
            onMouseEnter={handleMouseEnterService}
            onMouseLeave={handleMouseLeaveService}
          >
            Why Choose Us
          </a>
          {showSubnav && (
            <ul
              className="subnav"
              onMouseEnter={handleMouseEnterService}
              onMouseLeave={handleMouseLeaveService}
            >
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/testimonials">Testimonials</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy</Link>
              </li>
              <li>
                <Link to="/article">Article</Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <a
            href="#services"
            className="navbar-links"
            onMouseEnter={handleMouseEnterService1}
            onMouseLeave={handleMouseLeaveService1}
          >
            Services
          </a>
          {showSubnav1 && (
            <ul
              className="subnav"
              onMouseEnter={handleMouseEnterService1}
              onMouseLeave={handleMouseLeaveService1}
            >
              <li>
                <Link to="/solutions">Clinics4Health Solution</Link>
              </li>
              <li>
                <Link to="/medicaltranscription">
                  Medical Transcription Service
                </Link>
              </li>
              <li>
                <Link to="/medicalbilling">Medical Billing and Coding</Link>
              </li>
            </ul>
          )}
        </li>
        <li onClick={handleContactClick}>
          <a href="#reviews" className="navbar-links">
            Contact Us
          </a>
        </li>
        <li>
          <a href="/faqs" className="navbar-links">
            Faqs
          </a>
        </li>
      </ul>
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Why Choose Us
            </a>
            <ul className="mobile-navbar-links-sub">
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/testimonials">Testimonials</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy</Link>
              </li>
              <li>
                <Link to="/article">Article</Link>
              </li>
            </ul>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Services
            </a>
            <ul className="mobile-navbar-links-sub">
              <li>
                <Link to="/solutions">Clinics4Health Solution</Link>
              </li>
              <li>
                <Link to="/medicaltranscription">
                  Medical Transcription Service
                </Link>
              </li>
              <li>
                <Link to="/medicalbilling">Medical Billing and Coding</Link>
              </li>
            </ul>
          </li>
          <li>
            <a onClick={openNav} href="/contact">
              Contact Us
            </a>
          </li>
          <li>
            <a onClick={openNav} href="/faqs">
              Faqs
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
