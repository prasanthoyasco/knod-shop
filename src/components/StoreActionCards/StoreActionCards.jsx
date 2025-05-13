import { MapPin, PhoneCall } from "lucide-react";
import './StoreActionCards.css';

const StoreActionCards = () => {
  return (
    <div className="store-card-container">
      <div className="store-card store-card-highlight">
        <div className="store-card-icon"><MapPin /></div>
        <div className="store-card-content">
          <h3 className="store-card-title">Visit Our Experience Stores</h3>
          <p className="store-card-description">
            Explore our premium products up close at any of our 4 Experience Stores.
            Touch, feel, and choose what’s right for your space.
          </p>
          <button className="store-card-button">LOCATE OUR STORES</button>
        </div>
      </div>
      <div className="store-card">
        <div className="store-card-icon"><PhoneCall /></div>
        <div className="store-card-content">
          <h3 className="store-card-title">Request a Callback</h3>
          <p className="store-card-description">
            Have a query regarding a service we offer? Our representatives will help you with it.
          </p>
          <button className="store-card-button">REQUEST A CALLBACK</button>
        </div>
      </div>
    </div>
  );
};

export default StoreActionCards;
