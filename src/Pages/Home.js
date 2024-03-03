import React from "react";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Members from "../Components/Members";
import Leadings from "../Components/Leadings";
import InfoCard from "../Components/InfoCard";
import v1 from "../Assets/V1.jpeg";
import v2 from "../Assets/v2.jpeg";
import v3 from "../Assets/v3.jpeg";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="home-section" style={{ width: "100%", overflow: "hidden" }}>
      <Hero />
      <Info />
      {/* <About /> */}
      <BookAppointment />
      <Leadings />
      <Reviews />
      <div className="home-content-table">
        <div className="home-content-table-row">
          <div className="home-content-table-col1">
            <h2
              data-aos="zoom"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Patient Access
            </h2>
            <p
              data-aos="zoom"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Blend scheduling, registration, clearance, intake and payment
              functionality into one welcoming, self-service experience for
              patients.
            </p>
            <h2
              data-aos="zoom"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Denial Management and Prevention
            </h2>
            <p
              data-aos="zoom"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Ensure full reimbursement and proactively address chronic errors
              to stop denials ahead of time.
            </p>
            <h2
              data-aos="zoom"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Financial Clearance
            </h2>
            <p
              data-aos="zoom"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Set expectations about patient payment responsibility and offer
              financial advocacy.
            </p>
            <h2
              data-aos="zoom"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Patient-Friendly Billing
            </h2>
            <p
              data-aos="zoom"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Provide consumer-preferred options such as online bill pay,
              automated payment plans and omni-channel customer service.
            </p>
          </div>
          <div className="home-content-table-col2">
            <h2
              data-aos="zoom"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Coding Management and Education
            </h2>
            <p
              data-aos="zoom"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Facilitate speed, accuracy and appropriate payment while
              supporting increased coding compliance and reimbursement.
            </p>
            <h2
              data-aos="zoom"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Health Information Management (HIM) Coding Review
            </h2>
            <p
              data-aos="zoom"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Analyze patient accounts and claims to determine proper use of CPT
              and HCPCS codes and DRGs.
            </p>
            <h2
              data-aos="zoom"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Payment Variance Analysis
            </h2>
            <p
              data-aos="zoom"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Identify incorrectly reimbursed or denied accounts and manage the
              appeal process to receive correct payment
            </p>
            <h2
              data-aos="zoom"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Strategic Pricing
            </h2>
            <p
              data-aos="zoom"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Analyze chargemaster, payer contracts and competitiveness to find
              areas of pricing opportunity and create pricing scenarios aligned
              with strategic goals.
            </p>
          </div>
        </div>
      </div>
      <div className="home-services-card-cover">
        <InfoCard
          image={v1}
          title="Vision"
          description="Clinics4Health wants to continuously improve customer satisfaction by providing better & State of the art Healthcare IT services and products to the society. To be a globally preferred healthcare organization and make a difference in the healthcare ecosystem. We bring comprehensive, unified management facilities that offer all-in-one, reliable service for both your plans local or nationwide"
        />
        <InfoCard
          image={v2}
          title="Mission"
          description="We improve the financial life of our provider, giving them the freedom to focus on patient care. To be leaders in Cloud Based Healthcare Solutions in Healthcare Make Clinics4Health the most Customer Friendly Company To help hospitals to make society a better place to live by improving healthcare delivery to patients"
        />
        <InfoCard
          image={v3}
          title="Commitment"
          description="As healthcare organization,We are committed to providing the best possible care to its patients and keeping the best RCM services in place makes it easier to fulfil those commitments. The healthcare Clinics4Health services provided by Practolytics are customized to meet your unique clinical requirement."
        />
      </div>
    </div>
  );
}

export default Home;
