import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Banner.css";

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
  return (
    <div className="position-relative">
      {/* search box */}
      <div className="banner-search-box bg-white">
        <div className="d-flex justify-content-between align-items-center">
          <IoSearch style={{ fontSize: "48px", height: "fit-content", color: '#333' }} className="ps-2" />
          <input
            type="text"
            className="form-control banner-search-input"
            placeholder="What are you looking for ?"
          />
          <button className="px-4 py-2 btn">Search</button>
        </div>
      </div>

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
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
      </div>
    </div>
  );
}
