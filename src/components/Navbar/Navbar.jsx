import { useState } from "react";
import logo from "../../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import "./Navbar.css";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showPopular, setShowPopular] = useState(false);

  const cartCount = 0;
  const wishlistCount = 0;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
   <>
    <header className="header-nav">
      <a href="/" className="logo">
        <img src={logo} alt="knobs shop" />
      </a>

      <div className="d-flex gap-4">
        <nav className={`navbar ${menuOpen ? "navbar-mobile-active" : ""}`}>
          <a href="/">Home</a>

          <div
            className="nav-dropdown"
            onMouseEnter={() => setShowProducts(true)}
            onMouseLeave={() => setShowProducts(false)}
            onClick={() => setShowProducts(!showProducts)}
          >
            <a className="nav-link">
              Products   
              <span className={`arrow-icon ${showProducts ? "rotate-up" : ""}`}>
                <IoIosArrowDown />
              </span>
            </a>
            {showProducts && (
              <div className="dropdown-menu">
                <a href="/products/rings">Rings</a>
                <a href="/products/chains">Chains</a>
                <a href="/products/bracelets">Bracelets</a>
              </div>
            )}
          </div>

          <div
            className="nav-dropdown"
            onMouseEnter={() => setShowPopular(true)}
            onMouseLeave={() => setShowPopular(false)}
            onClick={() => setShowPopular(!showPopular)}
          >
            <a className="nav-link">
              Popular 
              <span className={`arrow-icon ${showPopular ? "rotate-up" : ""}`}>
                <IoIosArrowDown />
              </span>
            </a>
            {showPopular && (
              <div className="dropdown-menu">
                <a href="/popular/new-arrivals">New Arrivals</a>
                <a href="/popular/trending">Trending Now</a>
              </div>
            )}
          </div>

          <a href="/">About Us</a>
          <a href="/">Contact Us</a>
        </nav>

        <div className="nav-icons">
          <div className="icon-wrapper">
            <AiOutlineHeart className="nav-icon" />
            <span className="icon-count">{wishlistCount}</span>
          </div>
          <div className="icon-wrapper">
            <AiOutlineShoppingCart className="nav-icon" />
            <span className="icon-count">{cartCount}</span>
          </div>
          <div className="icon-wrapper">
            <AiOutlineUser className="nav-icon" />
          </div>
          <div className="hamburger-icon" onClick={toggleMenu}>
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>
      </div>
    </header>

    </>
  );
}
