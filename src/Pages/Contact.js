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
        heading2="Address: T4 B 905 NX ONE TECHZONE Sector 04, Gr. Noida West (UP)
            201308"
        phone="+91 7090666917"
        mail="info@clinics4health.com"
        map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7006.989308139461!2d77.30997303888289!3d28.584933823884445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce458ccb0afa5%3A0x6f6a3dc21c831e29!2sSector%202%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1707844071794!5m2!1sen!2sin"
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
