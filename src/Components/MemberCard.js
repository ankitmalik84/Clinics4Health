import React from "react";

function MemberCard(props) {
  return (
    <div
      className="dt-card"
      data-aos="zoom-in"
      data-aos-duration="600"
      data-aos-easing="ease-in-out"
    >
      <img src={props.img} alt={props.name} className="dt-card-img" />
      <p className="dt-card-name">{props.name}</p>
      <p className="dt-card-title">{props.title}</p>
    </div>
  );
}

export default MemberCard;
