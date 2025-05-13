import React, { useState } from "react";
import "./FAQ.css";
const faqs = [
  {
    question: "What types of products do you offer?",
    answer:
      "We offer a wide range of high-quality products tailored to your needs.",
  },
  {
    question: "Do you offer any discounts or promotions?",
    answer:
      "Limit rock sail forest whiten army lump bad such separate he walk trade widower feather tongue substance bath wet hill.",
  },
  {
    question: "How can i provide feedback about my experience?",
    answer:
      "You can provide feedback through our website's contact form or via email.",
  },
  {
    question: "Do you offer customer supoort?",
    answer: "Yes, we offer 24/7 customer support via chat, phone, and email.",
  },
];
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <div>
        <h2 className="faq-title" style={{fontSize:"1.75rem", fontWeight:'700'}}>
          <span style={{ color: "#5b2c06" }}>—</span>FAQs
        </h2>
        <p className="faq-subtitle">Question? Look Here.</p>
      </div>
      <div className="faq-container">
        <div className="faq-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <span className="faq-toggle">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              <div
                className={`faq-answer-wrapper ${
                  openIndex === index ? "open" : ""
                }`}
              >
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="faq-right">
          <div className="faq-icon mb-3">
           <svg
  width="66"
  height="66"
  viewBox="0 0 66 66"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M27.1982 19.9805C12.272 19.9805 0.000135748 30.2447 0.000135748 42.8617C0.000135748 47.9051 1.95638 53.0307 5.54391 57.0033L0.477854 62.7926C-0.0206178 63.3628 -0.14153 64.1729 0.173898 64.8639C0.487393 65.555 1.17471 65.9988 1.93369 65.9988H29.1318C40.1524 65.9988 54.3963 56.5089 54.3963 42.8617C54.3963 30.2447 42.1244 19.9805 27.1982 19.9805ZM15.4682 46.4058C13.3364 46.4058 11.6012 44.6705 11.6012 42.5388C11.6012 40.407 13.3365 38.6718 15.4682 38.6718C17.5999 38.6718 19.3352 40.4071 19.3352 42.5388C19.3353 44.6705 17.6 46.4058 15.4682 46.4058ZM27.1982 46.4058C25.0664 46.4058 23.3312 44.6705 23.3312 42.5388C23.3312 40.407 25.0665 38.6718 27.1982 38.6718C29.3299 38.6718 31.0652 40.4071 31.0652 42.5388C31.0652 44.6705 29.33 46.4058 27.1982 46.4058ZM38.9282 46.4058C36.7964 46.4058 35.0612 44.6705 35.0612 42.5388C35.0612 40.407 36.7965 38.6718 38.9282 38.6718C41.0599 38.6718 42.7952 40.4071 42.7952 42.5388C42.7952 44.6705 41.06 46.4058 38.9282 46.4058Z"
    fill="white"
    style={{ fillOpacity: 1 }}
  />
  <path
    d="M65.5308 39.3463L60.9785 34.0348C64.228 30.368 65.9974 25.8966 65.9974 21.2706C65.9972 9.54303 54.721 0.00195312 40.8616 0.00195312C28.3289 0.00195312 17.6813 7.81211 15.8013 17.9776C19.2982 16.7894 23.2198 16.1139 27.1982 16.1139C44.1301 16.1139 58.0411 27.9402 58.2444 42.5392H64.0638C65.7154 42.5393 66.6024 40.5944 65.5308 39.3463Z"
    style={{
      fill: 'color(display-p3 0.5112 0.2629 0.0486)',
      fillOpacity: 1
    }}
  />
</svg>

          </div>
          <h3 className="faq-right-title">You have different questions?</h3>
          <p className="faq-right-text">
            Our team will answer all your questions. We ensure a quick response.
          </p>
          <button className="faq-contact-button">Contact Us</button>
        </div>
      </div>
    </>
  );
}

export default FAQ;
