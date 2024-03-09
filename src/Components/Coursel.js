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

    // Clone the list items for infinite scrolling effect
    const originalItems = list.children;
    const clonedItems = [...originalItems].map((item) => item.cloneNode(true));
    clonedItems.forEach((item) => list.appendChild(item));

    let intervalId;

    const startScrolling = () => {
      intervalId = setInterval(() => {
        if (list.scrollLeft + list.clientWidth >= list.scrollWidth) {
          // If we've reached the end, reset the scroll position to the start
          list.scrollLeft = 0;
        } else {
          list.scrollLeft += list.clientWidth;
        }
      }, 3000);
    };

    startScrolling();

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
