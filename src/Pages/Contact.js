import React from "react";
import AppointmentForm from "../Components/AppointmentForm";
import "../Styles/Contact.css";
import MapSection from "../Components/MapSection";

function Contact() {
  return (
    <div className="contactPage">
      <div className="contactHeader">
        <h1>CONTACT US</h1>
      </div>
      <AppointmentForm />
      <div className="contact-title-content">
        <h2 className="contact-title-sup">Our Branches</h2>
        <h3 className="contact-title">
          <span>Contact Details</span>
        </h3>
      </div>
      <MapSection
        heading="India Head Office"
        heading2="Address: Tower 4 B 905 NX ONE TECHZONE SECTOR 4 GREATER NOIDA WEST 201308 near gaur mall nearest metro noida sector 52"
        phone="+91 7090666917"
        mail="info@clinics4health.com"
        map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.952202139976!2d77.4348672!3d28.6012107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefbd1a3630c9%3A0x7d9c0f1be01d83de!2sNX-ONE%20AVENUE%2C%20GATE%20NO%201!5e0!3m2!1sen!2sin!4v1709471903719!5m2!1sen!2sin"
      />
      <div className="dotted-line"></div>
      <MapSection
        heading="US Head Office"
        heading2="Address: 30 N. Gould St. Ste N,
Sheridan ,WY 82801"
        phone="+1 (307) 222 3706"
        mail="info@clinics4health.com"
        map="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2831.210576611914!2d-106.956643!3d44.796897!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fa943c6fad65%3A0x293a47fe7b11d57b!2sSheridan%2C%20WY%2082801!5e0!3m2!1sen!2sus!4v1707848348292!5m2!1sen!2sus"
      />
      <div className="legal-footer">
        <p>© 2024-2025 Clinics4Health+. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Contact;
