import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.png";
import * as bootstrap from 'bootstrap';
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./Banner.css";
import { useEffect } from "react";

const slides = [
  {
    src: banner1,
    captionTitle: "Architect & Builder Packages",
    captionText: "Choose from a wide range of well-crafted premium quality furniture online.",
  },
  {
    src: banner2,
    captionTitle: "Architect & Builder Packages",
    captionText: "Choose from a wide range of well-crafted premium quality furniture online.",
  },
  {
    src: banner3,
    captionTitle: "Architect & Builder Packages",
    captionText: "Choose from a wide range of well-crafted premium quality furniture online.",
  },
];

export function Banner() {
  useEffect(() => {
    const carousel = document.getElementById("carouselExampleIndicators");

    const handleSlideChange = () => {
      const activeIndex = Array.from(
        carousel.querySelectorAll(".carousel-item")
      ).findIndex((item) => item.classList.contains("active"));

      const updateIndicators = (selector) => {
        const buttons = carousel.querySelectorAll(selector);
        buttons.forEach((btn, idx) => {
          btn.classList.toggle("active", idx === activeIndex);
        });
      };

      updateIndicators(".dot-indicators button");
    };

    carousel.addEventListener("slid.bs.carousel", handleSlideChange);
    const isMobile = window.innerWidth < 768;
  if (isMobile) {
    setTimeout(() => {
      const carouselInstance = bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel);
      carouselInstance.next(); // Trigger next slide to activate auto-slide
    }, 1500); // Adjust delay as needed
  }

    return () => {
      carousel.removeEventListener("slid.bs.carousel", handleSlideChange);
    };
  }, []);
  return (
    <div className="position-relative">
      {/* search box */}
      <div className="banner-search-box bg-white">
        <div className="d-flex justify-content-between align-items-center">
          <IoSearch className="search-icon ps-2" />
          <input
            type="text"
            className="form-control banner-search-input"
            placeholder="What are you looking for ?"
          />
          <button className="px-4 py-2 btn">Search</button>
        </div>
      </div>

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3500" data-bs-pause="false"
>
        {/* Numbered Indicators */}
        <div className="carousel-indicators numbered-indicators">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={idx}
              className={idx === 0 ? "active" : ""}
              aria-current={idx === 0 ? "true" : undefined}
              aria-label={`Slide ${idx + 1}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        {/* Slides with Captions */}
        <div className="carousel-inner">
          {slides.map((slide, idx) => (
            <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
              <img
                src={slide.src}
                className="d-block w-100"
                alt={`Slide ${idx + 1}`}
              />
              <div className="carousel-caption d-none d-md-block text-black animated-caption">
                <h1>{slide.captionTitle}</h1>
                <p>{slide.captionText}</p>
                <div className="ctn">
                  <a href="/">
                    Discover now <IoIosArrowRoundForward />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Dot Indicators for Mobile */}
<div className="carousel-indicators dot-indicators d-md-none">
  {slides.map((_, idx) => (
    <button
      key={idx}
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={idx}
      className={idx === 0 ? "active" : ""}
      aria-current={idx === 0 ? "true" : undefined}
      aria-label={`Slide ${idx + 1}`}
    />
  ))}
</div>

      </div>
    </div>
  );
}
