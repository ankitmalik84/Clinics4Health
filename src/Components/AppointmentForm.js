import React, { useEffect } from "react";
import "../Styles/AppointmentForm.css";
import { ToastContainer } from "react-toastify";
import ContactForm from "./ContactUs";
function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="appointment-form-section">
      <div className="contact">
        <div className="formSide">
          <h2>Reach Clinics4Health for an appointment.</h2>
          <p>
            Give us a call, email us, or fill out the form below and we’ll be in
            touch soon.
          </p>
        </div>
        <ContactForm title="Contact Us Clinics4Health At Below" />
      </div>

      <ToastContainer autoClose={3000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
