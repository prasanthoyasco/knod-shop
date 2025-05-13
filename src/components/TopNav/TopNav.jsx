import "./TopNav.css"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export  function TopNav() {
  return (
     <>
      <div className="top-banner-badge py-2 px-4 bg-black d-flex justify-content-around align-items-center ">
        <div className="contact">
          <p>  Call Us : <span>+91 936 059 5366</span></p>
        </div>
        <div className="discount-info">
           <p> Sign up and <span>GET 25% OFF</span> for your first order. <a href="#">Sign up now</a></p>
        </div>
        <div className="social-icon d-flex gap-2">
          <div className="icon-fb d-flex align-items-center justify-content-center">
          <FaFacebookF />
          </div>
          <div className="icon-ig icon-fb d-flex align-items-center justify-content-center">
           <FaInstagram />
          </div>
        </div>
      </div>
    </>
  )
}

