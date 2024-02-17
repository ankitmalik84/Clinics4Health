import React from "react";
import MemberCard from "./MemberCard";
import profile1 from "../Assets/m1.jpg";
import profile2 from "../Assets/m2.jpg";
import profile3 from "../Assets/m3.jpeg";
import profile4 from "../Assets/m4.jpg";
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
          name="Martin Xiu"
          title="Chief Executive Officer and Board Membe"
          stars="4.9"
          reviews="1800"
        />
        <MemberCard
          img={profile2}
          name="Sam Mathur"
          title="Chief Strategy and Product Officer"
          stars="4.8"
          reviews="700"
        />
        <MemberCard
          img={profile3}
          name="Cia Pinto"
          title="SVP and Chief Data Scientist"
          stars="4.7"
          reviews="450"
        />
        <MemberCard
          img={profile4}
          name="Maria clay"
          title="Chief Financial Officer"
          stars="4.8"
          reviews="500"
        />
      </div>
    </div>
  );
}

export default Members;
