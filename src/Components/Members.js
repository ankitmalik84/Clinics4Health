import React from "react";
import MemberCard from "./MemberCard";
import profile1 from "../Assets/m2.png";
import "../Styles/Members.css";

function Members() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>The Team</span>
        </h3>

        <p
          className="dt-description"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at Health Plus. Trust in their
          knowledge and experience to lead you towards a healthier and happier
          life.
        </p>
      </div>

      <div className="dt-cards-content">
        <MemberCard
          img={profile1}
          name="Rahul Soni"
          title="India Operations Head"
        />
      </div>
    </div>
  );
}

export default Members;
