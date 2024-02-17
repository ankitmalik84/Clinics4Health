import React from "react";
// import "../Styles/InfoCard.css";

function InfoCard(props) {
  return (
    // <div className="card">
    //   <div
    //     className="header"
    //     style={{ backgroundImage: `url(${props.image})` }}
    //   ></div>
    //   <div className="content">
    //     <h5>{props.title}</h5>
    //     <p>{props.description}</p>
    //   </div>
    // </div>
    <div className="info-cards">
      <div
        className="info-card-img"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div
        className="card-info"
        data-aos="zoom-in"
        data-aos-duration="200"
        data-aos-easing="ease-in-out"
      >
        <p className="info-card-title">{props.title} </p>
        <p className="info-card-description">{props.description}</p>
      </div>
    </div>
  );
}

export default InfoCard;
