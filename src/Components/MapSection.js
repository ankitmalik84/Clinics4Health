import React from "react";
import "../Styles/MapSection.css";

function MapSection(props) {
  return (
    <div className="map-section">
      <div className="contact-details">
        <h1>{props.heading}</h1>
        <p>{props.heading2}</p>
        <h1>Phone</h1>
        <p>
          <a
            href={props.phone}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {props.phone}
          </a>
        </p>
        <h1>Email</h1>
        <p>
          <a
            href="mailto:info@clinics4health.com"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {props.mail}
          </a>
        </p>
      </div>
      <div className="mapbox">
        <figure>
          <iframe
            title="map"
            src={props.map}
            width="100%"
            height="400"
            loading="lazy"
          ></iframe>
        </figure>
      </div>
    </div>
  );
}

export default MapSection;
