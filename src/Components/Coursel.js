// Coursel.js
import React, { useEffect, useRef } from "react";
import "../Styles/Coursel.css";
import img1 from "../Assets/Athena-Health.png";
import img2 from "../Assets/Conexem-logo.png";
import img3 from "../Assets/HealthPac.png";
import img4 from "../Assets/l1-2.jpg";
import img5 from "../Assets/l2-1.jpeg";
import img6 from "../Assets/daisybill.png";
import img7 from "../Assets/drchrono-420x320-20190228.png";

function Coursel() {
  const listRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;

    const intervalId = setInterval(() => {
      if (list) {
        list.scrollTo({
          left: list.scrollLeft + list.clientWidth,
          behavior: "smooth",
        });

        // If we have reached the end of the list, scroll back to the beginning
        if (list.scrollLeft + list.clientWidth >= list.scrollWidth) {
          list.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        }
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="clients">
      <div className="list-title-content">
        <h2>Trust & Worth</h2>
        <h3 className="list-title">
          <span>Our Clients</span>
        </h3>
      </div>
      <ul ref={listRef} className="clients-list has-scrollbar">
        {[img1, img2, img3, img4, img5, img6, img7].map((imgSrc, index) => (
          <li key={index} className="clients-item">
            <img src={imgSrc} alt="client logo" className="client-image" />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Coursel;
