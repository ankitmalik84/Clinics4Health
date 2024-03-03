import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faAngleUp,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/contact");
  };
  const handleServiceButtonClick = () => {
    navigate("/solutions");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p
            className="text-headline"
            data-aos="flip-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            BUILD YOUR DREAM WITH Clinics4Health
          </p>
          <h2 className="text-title">VISION GOT LARGER</h2>
          <p
            className="text-descritpion"
            data-aos="zoom-out"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            Clinics4Health has revenue cycle solutions customized for hospitals,
            physician practices, vendors and laboratories. The company’s line of
            solutions aims to increase cash flow, maximize productivity and
            reduce paper processing dependency. Clinics4Health specializes in
            electronic transaction management, emergency department business
            services and laboratory revenue cycle management.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleServiceButtonClick}
            data-aos="zoom-in"
            data-aos-duration="300"
            data-aos-easing="ease-in-out"
          >
            <FontAwesomeIcon icon={faPhone} /> Our Services
          </button>
          <button
            className="text-contact-btn"
            type="button"
            onClick={handleBookAppointmentClick}
            data-aos="zoom-in"
            data-aos-duration="300"
            data-aos-easing="ease-in-out"
          >
            <FontAwesomeIcon icon={faScrewdriverWrench} /> Contact Us
          </button>
          <div
            className="text-stats"
            data-aos="zoom-in"
            data-aos-duration="300"
            data-aos-easing="ease-in-out"
          >
            <div
              className="text-stats-container"
              data-aos="flip-left"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <p>12+</p>
              <p>Client Trust In Us</p>
            </div>

            <div
              className="text-stats-container"
              data-aos="flip-left"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <p>02+</p>
              <p>Year of Experience with proud</p>
            </div>

            <div
              className="text-stats-container"
              data-aos="flip-left"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <p>100+</p>
              <p>Employees & Counting More</p>
            </div>
            <div
              className="text-stats-container"
              data-aos="flip-left"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <p>99.5%</p>
              <p>Satisfaction</p>
            </div>
          </div>
        </div>

        <div
          className="hero-image-section"
          data-aos="zoom-in"
          data-aos-duration="300"
          data-aos-easing="ease-in-out"
        >
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
