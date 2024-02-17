import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3
          className="about-title"
          data-aos="zoom-in"
          data-aos-duration="300"
          data-aos-easing="ease-in-out"
        >
          <span>Why Choose Our Firm</span>
        </h3>
        <p
          className="about-description"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          Over the years, our experience and investment in knowledgeable
          resources have allowed us to become a leading provider of outsourced
          revenue cycle management solutions.
        </p>

        <h4
          className="about-text-title"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          Your Solutions
        </h4>

        <SolutionStep
          title="Enhanced Infrastructure"
          description="GaurdianRCM has the infrastructural capacity and the expertise to avoid unnecessary disruptions that mostly occur due to regulatory changes or unforeseen errors. With our help, you can always bank on achieving the best possible results, while leveraging our state-of-the-art infrastructure and web-ready interfaces to achieve better operational flexibility"
        />

        <SolutionStep
          title="Stringent Data Privacy"
          description="GaurdianRCM is an ISO certified company and is also 100% HIPAA compliant. We always remain within the regulatory guidelines and ensure that at each step of the way, our client is apprised of compliance issues, if any. We have strict protocols in place to safeguard all business-specific information and customer information."
        />

        <SolutionStep
          title="Higher Competency"
          description="Most healthcare organizations face exceptional challenges when it comes to training, implementation, and adjusting to the learning curve of a revenue cycle system. With the help of RCM, we can help our clients streamline the process by utilizing our team of exceptional medical billing experts and project managers who double up as your solution architects as well."
        />
      </div>
    </div>
  );
}

export default About;
