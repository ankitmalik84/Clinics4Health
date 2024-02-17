import React from "react";
// import AppointmentForm from "../Components/AppointmentForm";
import "../Styles/Testimonial.css";
// import MapSection from "../Components/MapSection";
import Reviews from "../Components/Reviews";
import ContactForm from "../Components/ContactUs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
function Testimonial() {
  return (
    <div className="contactPage">
      <div className="testimonialHeader">
        <h1>TESTIMONIALS</h1>
        <h2>How our clients describe their experience with us.</h2>
      </div>
      <Reviews />
      <div
        className="review-below"
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
      >
        <div className="review-below-left">
          <h1
            data-aos="zoom-out"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            Would you like to share your own review?
          </h1>
          <h2
            data-aos="zoom-out"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            Get In Touch
          </h2>
          <div className="details">
            <div
              className="details-content"
              data-aos="zoom-out"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <FontAwesomeIcon icon={faLocation} />
              <a href=".">
                ​C4 Second Floor Sector 02, Noida Gauttam Budha Nagar (UP)
                201301
              </a>
            </div>
            <div
              className="details-content"
              data-aos="zoom-out"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+91876543210">+91 7090666917</a>
            </div>
            <div
              className="details-content"
              data-aos="zoom-out"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <FontAwesomeIcon icon={faMailBulk} />
              <a href="mailto:info@clinics4health.com">
                info@clinics4health.com
              </a>
            </div>
          </div>
        </div>
        <ContactForm title="Say Something About Our Services :" />
      </div>
      {/* <AppointmentForm /> */}
      {/* <div className="contact-title-content">
        <h2 className="contact-title-sup">Our Branches</h2>
        <h3 className="contact-title">
          <span>Contact Details</span>
        </h3>
      </div> */}
      {/* <MapSection
        heading="India Head Office"
        heading2="Address: T4 B 905 NX ONE TECHZONE Sector 04, Gr. Noida West (UP)
            201308"
        phone="+91 7090666917"
        mail="info@clinics4health.com"
        map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7006.989308139461!2d77.30997303888289!3d28.584933823884445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce458ccb0afa5%3A0x6f6a3dc21c831e29!2sSector%202%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1707844071794!5m2!1sen!2sin"
      /> */}
      {/* <div className="dotted-line"></div> */}
    </div>
  );
}

export default Testimonial;
