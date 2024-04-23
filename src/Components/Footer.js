import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div
            className="ft-info-p1"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <p className="ft-title">
              Clinics4Health <span className="ft-sign">+</span>
            </p>
            <p className="ft-description">
              Talk to online doctors and get medical advice, online
              prescriptions, refills and medical notes within minutes. On-demand
              healthcare services at your fingertips.
            </p>
          </div>

          <SubscribeNewsletter />
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Our Services & Policy</p>
          <ul className="ft-list-items">
            <li
              data-aos="flip-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <a href="/solutions">Clinics4Health Solutions</a>
            </li>
            <li
              data-aos="flip-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <a href="/medicaltranscription">Medical Transcription Services</a>
            </li>
            <li
              data-aos="flip-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <a href="/medicalbilling">Medical Billing & Coding</a>
            </li>
            <li
              data-aos="flip-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <a href="/aboutus">About Us</a>
            </li>
            <li
              data-aos="flip-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">India Office</p>
          <ul className="ft-list-items">
            <li
              data-aos="flip-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              A141, Sector 02
            </li>
            <li
              data-aos="flip-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Noida, India
            </li>
            <li
              data-aos="flip-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Pin - 201301
            </li>
          </ul>
        </div>
        <div className="ft-list">
          <p className="ft-list-title">USA Office</p>
          <ul className="ft-list-items">
            <li
              data-aos="flip-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              51 p Wacker Dr
            </li>
            <li
              data-aos="flip-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Chicago, IL 60606
            </li>
            <li
              data-aos="flip-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              United States
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul
            className="ft-list-items"
            data-aos="flip-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <li>
              <a href="mailto:Hr@clinics4health.com">Hr@clinics4health.com</a>
            </li>
            <li>
              <a href="mailto:Info@clinics4health.com">
                Info@clinics4health.com
              </a>
            </li>
            <li>
              <a href="tel:+1 (307)222-3706">+1 (307)222-3706</a>
            </li>
            <li>
              <a href="tel:01204281796">01204281796</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© 2024-2025 Clinics4Health+. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
