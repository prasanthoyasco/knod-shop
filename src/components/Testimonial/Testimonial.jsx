import { useEffect, useState } from 'react';
import './Testimonial.css';
import test1 from '../../assets/test1.png';
import test2 from '../../assets/test2.png';
import test3 from '../../assets/test3.png';
import test4 from '../../assets/test4.png';
import test5 from '../../assets/test5.png';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

const testimonials = [
  {
    image: test1,
    name: 'John Doe',
    text: `"The quality of the cabinets is outstanding! Sturdy, stylish, and delivered on time. It has completely transformed my workspace."`,
  },
  {
    image: test2,
    name: 'Jane Smith',
    text: `Absolutely loved the products! Great customer service and very reliable delivery.`,
  },
  {
    image: test3,
    name: 'Alicia',
    text: `I couldn’t be happier with my purchase. High quality and beautiful design.`,
  },
  {
    image: test4,
    name: 'Mark Lee',
    text: `Super stylish and exactly what I needed. I’ll definitely recommend this to others.`,
  },
  {
    image: test5,
    name: 'Sara K.',
    text: `The detail and craftsmanship are top-notch. Thank you for a wonderful experience.`,
  },
];

export const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  const getIndex = (offset) => (current + offset + testimonials.length) % testimonials.length;

  return (
    <div className="testimonial-wrapper">
      <h3 className="testimonial-title"><span style={{color:"#5b2c06"}}>—</span> Testimonials</h3>
      <p className="testimonial-subtitle">Testimonials from Our Loyal Customers</p>

      <div className="testimonial-main">
        <button className="testimonial-nav left" onClick={prev}><IoArrowBack/></button>

        <div className="testimonial-carousel">
          {[-2, -1, 0, 1, 2].map((offset) => {
            const index = getIndex(offset);
            return (
              <img
                key={index}
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className={`carousels-image ${offset === 0 ? 'center' : ''}`}
              />
            );
          })}
        </div>

        <button className="testimonial-nav right" onClick={next}><IoArrowForward/></button>
      </div>

      <div className="testimonial-content">
        <p className='fs-2'>"{testimonials[current].text}"</p>
      </div>
    </div>
  );
};
