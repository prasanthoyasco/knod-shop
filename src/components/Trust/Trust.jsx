import React, { useRef, useEffect, useState } from "react";
import "./Trust.css";
import icon1 from "../../assets/icons/delivery.png";
import icon2 from "../../assets/icons/quality.png";
import icon3 from "../../assets/icons/help.png";
import icon4 from "../../assets/icons/waranty.png";

const trustBoxes = [
  { src: icon1, captionTitle: "On-time Delivery" },
  { src: icon2, captionTitle: "Uncompromised Quality" },
  { src: icon3, captionTitle: "24/7 Customer Support" },
  { src: icon4, captionTitle: "Reliable Warranty" },
  { src: icon1, captionTitle: "Fast Dispatch" },
  { src: icon2, captionTitle: "Premium Materials" },
];

export const Trust = () => {
  const sectionRef = useRef(null);
  const boxesRef = useRef(null);
  const intervalRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [isHovered, setIsHovered] = useState(false);

  // Infinite Auto Scroll
  useEffect(() => {
    const slider = boxesRef.current;
    const card = slider.querySelector(".trust-box");
    if (!slider || !card) return;

   const gap = parseInt(getComputedStyle(slider).gap || 40); // fallback if undefined
const cardWidth = card.offsetWidth + gap;

const isMobile = window.innerWidth <= 768;
const scrollAmount = isMobile ? cardWidth * 2 : cardWidth; // scroll 2 boxes on mobile

const scroll = () => {
  if (isHovered || isDragging.current) return;
  if (slider.scrollLeft >= slider.scrollWidth - slider.offsetWidth) {
    slider.scrollTo({ left: 0, behavior: "auto" });
  } else {
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
};


    intervalRef.current = setInterval(scroll, 3000);

    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  // Hover to pause
  useEffect(() => {
    const slider = boxesRef.current;
    if (!slider) return;

    const handleEnter = () => setIsHovered(true);
    const handleLeave = () => setIsHovered(false);

    slider.addEventListener("mouseenter", handleEnter);
    slider.addEventListener("mouseleave", handleLeave);

    return () => {
      slider.removeEventListener("mouseenter", handleEnter);
      slider.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  // Mouse / Touch Drag Scroll
  useEffect(() => {
    const slider = boxesRef.current;
    if (!slider) return;

    const startDrag = (e) => {
      isDragging.current = true;
      slider.classList.add("active");
      startX.current = e.pageX || e.touches[0].pageX;
      scrollLeft.current = slider.scrollLeft;
    };

    const dragMove = (e) => {
      if (!isDragging.current) return;
      const x = e.pageX || e.touches[0].pageX;
      const walk = x - startX.current;
      slider.scrollLeft = scrollLeft.current - walk;
    };

    const endDrag = () => {
      isDragging.current = false;
      slider.classList.remove("active");
    };

    slider.addEventListener("mousedown", startDrag);
    slider.addEventListener("touchstart", startDrag);
    slider.addEventListener("mousemove", dragMove);
    slider.addEventListener("touchmove", dragMove);
    slider.addEventListener("mouseup", endDrag);
    slider.addEventListener("mouseleave", endDrag);
    slider.addEventListener("touchend", endDrag);

    return () => {
      slider.removeEventListener("mousedown", startDrag);
      slider.removeEventListener("touchstart", startDrag);
      slider.removeEventListener("mousemove", dragMove);
      slider.removeEventListener("touchmove", dragMove);
      slider.removeEventListener("mouseup", endDrag);
      slider.removeEventListener("mouseleave", endDrag);
      slider.removeEventListener("touchend", endDrag);
    };
  }, []);

  return (
    <div className="trust-section" ref={sectionRef}>
      <h2 className="fs-1">Trust of 50k+ Customers, Here's Why</h2>
      <div className="trust-boxes" ref={boxesRef}>
        {[...trustBoxes, ...trustBoxes].map((el, index) => (
          <div className="trust-box" key={index}>
            <img src={el.src} alt={el.captionTitle} />
            <h5>{el.captionTitle}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};
