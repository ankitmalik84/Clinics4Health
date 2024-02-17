import React from "react";
// import InformationCard from "./InformationCard";
import InfoCard from "./InfoCard";
import c1 from "../Assets/c1.jpg";
import c2 from "../Assets/c2.jpg";
import c3 from "../Assets/c3.png";
import c4 from "../Assets/c4.png";
import c5 from "../Assets/c5.png";
import c6 from "../Assets/c6.png";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div
        className="info-title-content"
        data-aos="flip-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <h2 className="info-title-sup">Build Your Dream</h2>
        <h3 className="info-title">
          <span>Many Years of Undefeated Success</span>
        </h3>
        <p
          className="info-description"
          data-aos="flip-down"
          data-aos-duration="500"
          data-aos-easing="ease-in"
        >
          Clinics4Health brings the right people, process, and technology
          together to streamline your revenue cycle including the various
          Revenue Cycle Management disciplines that take your valuable time away
          from the patient. The size of the organization does not matter –
          whether you’re a medical billing company or healthcare system,
          GaurdianRCM’s best practice engine and unique solutions will elevate
          your revenue cycle to the next level.
        </p>
      </div>

      <div className="info-cards-content">
        <InfoCard
          title="Revenue Cycle Management"
          image={c1}
          description="Get the full payment that you’ve earned with revenue cycle management solutions from GaurdianRCM. Our revenue cycle technologies cover the breadth of revenue cycle management, while the Our medical billing & coding team with certified coders allows your staff to focus on patients."
          // icon={faTruckMedical}
        />
        <InfoCard
          title="Medical Transcription Services"
          image={c2}
          description="Medical Transcription Services Market: A thorough analysis of statistics about the current as well as emerging trends offers clarity regarding the Medical Transcription Services Market dynamics."
          // icon={faTruckMedical}
        />
        <InfoCard
          title="Medical Coding Services"
          image={c3}
          description="Accurate medical coding plays an essential role in healthcare information management and overall quality of care. Medical coding audits, both internal and external, ensure that healthcare organizations have the proper policies and procedures in place to achieve quality medical coding."
          // icon={faTruckMedical}
        />
        <InfoCard
          title="Denial Management"
          image={c4}
          description="Denial management in medical billing involves resolving denied or rejected insurance claims by identifying the root cause of the denial, correcting the error, and resubmitting the claim. Effective denial management can help healthcare providers maximize their revenue and reduce the risk of financial losses. It requires a systematic approach that involves tracking and analyzing denied claims, developing strategies to prevent future denials, and ensuring timely follow-up with insurance companies"
          // icon={faTruckMedical}
        />

        <InfoCard
          title="Payment Posting services"
          image={c5}
          description="Payment posting is a vital step in the medical billing process, as it helps healthcare providers manage their revenue cycle effectively. Our payment posting services ensure that every patient's payment is accurately recorded, reducing overall costs for healthcare providers. GaurdianRCM can manage this entire process for you. Not only do we take away the headaches, we also deliver superior performance across many parameters such as higher accuracy, productivity and significant reduction in denials."
          // icon={faTruckMedical}
        />

        <InfoCard
          title="Data Entry Services"
          image={c6}
          description="Clinics4Health provides top-notch data entry services that help businesses streamline their processes and achieve digitization of data. With easy access to digital files, companies can make informed decisions and monitor their performance effectively. Our services ensure that businesses have a reliable and efficient way to manage their backend operations and access valuable data resources. By partnering with us, businesses can experience a significant Changes in the way they keep and manage their information."
          // icon={faTruckMedical}
        />
      </div>
    </div>
  );
}

export default Info;
