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
        heading2="Address: A141, Sector 02, Noida, India, Pin-201301"
        phone="01204281796"
        mail="info@clinics4health.com"
        map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7006.989807831562!2d77.30539172669631!3d28.584924152817596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce458ccb0afa5%3A0x6f6a3dc21c831e29!2sSector%202%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1713881871489!5m2!1sen!2sin"
      />
      <div className="dotted-line"></div>
      <MapSection
        heading="US Head Office"
        heading2="Address: 51p Wacker Dr, Chicago,IL 60606, United States"
        phone="+1 (307) 222 3706"
        mail="info@clinics4health.com"
        map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1485.2315788642527!2d-87.63793034351609!3d41.88289539278035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cb8f69432d1%3A0xad1a9cb428e4526d!2s51%20N%20Wacker%20Dr%2C%20Chicago%2C%20IL%2060606%2C%20USA!5e0!3m2!1sen!2sin!4v1713881529514!5m2!1sen!2sin"
      />
      <div className="legal-footer"></div>
    </div>
  );
}

export default Contact;
