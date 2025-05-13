import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Step 1: Import
import "./Category.css";
import { categories } from '../../assets/Catagories-collection';

export const Category = () => {
  const navigate = useNavigate(); // Step 2: Initialize
  const ref = useRef([]);

  const scrollLeft = () => {
    document.getElementById("shopByCategorySlider").scrollBy({ left: -900, behavior: "smooth" });
  };

  const scrollRight = () => {
    document.getElementById("shopByCategorySlider").scrollBy({ left: 900, behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    ref.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="mt-5 categoryheading">
        <h1 className='my-3 fade-slide-up' ref={el => ref.current.push(el)}>Shop By Category</h1>
        <p className=' my-3 fade-slide-up' ref={el => ref.current.push(el)} style={{ transitionDelay: "0.2s" }}>Select a category</p>
      </div>
      <div className="shopByCategoryWrapper">
        <button className="shop-by-cat-nav slide-back" onClick={scrollLeft}><i className="bi bi-arrow-left"></i></button>
        <div id="shopByCategorySlider">
          {categories?.map((col, index) => (
            <div className={`category-card-col ${col.columnClass}`} key={index}>
              {col.items?.map((item, idx) => (
                <div
                key={idx}
                onClick={() => navigate(`/category/${item.label}`)}
                className={`category-card box-card ${item.bg}`}
              >
                <div className="card-content" style={{ backgroundImage: `url(${item.image})` }}>
                  <div className="card-left">
                    <span className="item-count">{item.countLabel}</span>
                    <h3 className="card-title">{item.label}</h3>
                    <ul className="card-list">
                      {item.subItems?.map((txt, i) => (
                        <li key={i}>{txt}</li>
                      ))}
                    </ul>
                    <button className="view-btn">View Products</button>
                  </div>
                 
                </div>
              </div>

              ))}
            </div>
          ))}
        </div>
        <button className="shop-by-cat-nav slide-next" onClick={scrollRight}><i className="bi bi-arrow-right"></i></button>
      </div>
    </>
  );
};

