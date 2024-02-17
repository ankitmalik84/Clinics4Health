import React from "react";
import "../Styles/LeadCard.css";

function LeadCard(props) {
  return (
    <div className="container">
      <div
        className="card"
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
      >
        <div className="imgbox">
          <img src={props.img} alt={props.name} className="img" />
        </div>
      </div>
      <div className="details">
        <h2 className="title">{props.name}</h2>
        <span className="caption">{props.title}</span>
      </div>
    </div>
    // </div>
  );
}

export default LeadCard;
