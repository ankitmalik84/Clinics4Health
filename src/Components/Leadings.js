import React from "react";
import LeadCard from "./LeadCard";
import profile1 from "../Assets/m1.jpg";
import profile2 from "../Assets/m2.png";
import "../Styles/Leadings.css";

function Leadings() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>About Our Leadings</span>
        </h3>

        <p
          className="dt-description"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          We Are Leading International Company In The World
        </p>
      </div>

      <div className="dt-cards-content">
        <LeadCard
          img={profile1}
          name="Martin Xiu"
          title="Chief Executive Officer and Board Member"
        />
        <LeadCard
          img={profile2}
          name="Rahul Soni"
          title="India Operations Head  . . . . . .  .  . . . .    . "
        />
      </div>
    </div>
  );
}

export default Leadings;
