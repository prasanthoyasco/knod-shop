// components/ProductCard.jsx
import { FaStar, FaHeart } from "react-icons/fa";
import "./ProductCard.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

const ProductCard = ({ product }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };
  const {
    title,
    price,
    oldPrice,
    discount,
    rating,
    image,
  } = product;

  return (
    <div className="card product-card h-100 shadow-sm position-relative">
      {discount && (
        <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2">
          {discount}% off
        </span>
      )}
      <div className="d-flex align-items-center mb-2 justify-content-end me-2 my-2">
          <FaStar className="text-warning me-1" />
          <span>{rating}</span>
        </div>
      <img src={image} className="card-img-top p-3" alt={title} />
      <div className="card-body">
        
        <h5 className="card-title">{title}</h5>
        <p className="mb-1">
  <strong style={{color:"#222"}}>₹ {(price ? +price : 0).toLocaleString("en-IN")}</strong>{" "}
          <del className="text-muted ms-2">₹ {oldPrice.toLocaleString()}</del>
        </p>
        <p className="text-success">You Save ₹ {(oldPrice - price).toLocaleString()}</p>

        {/* Slide-up Actions */}
        <div className="card-actions">
          <button className="btn btn-sm" style={{background:"#B07D51",color:"#fff",padding:"0.3rem 2rem"}}>Add to Cart</button>
          <div onClick={toggleWishlist} className="wishlist-icon-wrapper">
      {isWishlisted ? (
        <AiFillHeart className="wishlist-icon animate" color="#ff002b" />
      ) : (
        <AiOutlineHeart className="wishlist-icon animate" />
      )}
    </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
