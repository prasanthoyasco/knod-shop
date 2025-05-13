import React from "react";
import "./NewsletterSection.css";

export default function NewsletterSection() {
  return (
    <div className="newsletter-container">
      <h3 className="newsletter-subtitle">— Our Newsletter</h3>
      <h2 className="newsletter-title">
        Subscribe to Our Newsletter to
        Get <span className="highlight">Update on Our Latest Offers</span>
      </h2>
      <p className="newsletter-description">
        Get 25% off on your first order just by subscribing to our newsletter
      </p>
      <div className="newsletter-input-group">
        <input
          type="email"
          className="newsletter-input"
          placeholder="Enter Email Address"
        />
        <button className="newsletter-button">Subscribe</button>
      </div>
    </div>
  );
}