import "./FooterSection.css"
import logo from "../../assets/footer-logo.png"
function FooterSection() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand col-md-4">
          <div className="logo"><img src={logo} alt="logo" /></div>
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s.
          </p>
          <div className="social-icons">
            <div style={{height:'20px',width:'20px',background:"#AB7B53",display:'flex',alignItems:'center',justifyContent:'center',padding:'15px',borderRadius:"50%"}}><i className="bi bi-facebook"></i></div>
            <div style={{height:'20px',width:'20px',background:"#AB7B53",display:'flex',alignItems:'center',justifyContent:'center',padding:'15px',borderRadius:"50%"}}><i className="bi bi-instagram"></i></div>
            <div style={{height:'20px',width:'20px',background:"#AB7B53",display:'flex',alignItems:'center',justifyContent:'center',padding:'15px',borderRadius:"50%"}}><i className="bi bi-youtube"></i></div>
          </div>
        </div>

        <div className="col-md-8 links-container">
          <div className="footer-section links">
          <h4 className='fs-2'>About</h4>
          <a href="#">About Us</a>
          <a href="#">Blogs</a>
        </div>

        <div className="footer-section links">
          <h4 className='fs-2'>Policy</h4>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Furniture</a>
        </div>

        <div className="footer-section links">
          <h4 className='fs-2'>Help</h4>
          <a href="#">Payment</a>
          <a href="#">Shipping</a>
          <a href="#">FAQ’s</a>
        </div>

        <div className="footer-section contact">
          <h4 className='fs-2'>Contact Info</h4>
          <a href="/"><i className="bi bi-telephone"></i> +91 93605 95366</a>
          <a href="/"><i className="bi bi-telephone"></i> +91 70924 66600</a>
          <a href="/"><i className="bi bi-envelope"></i> akashrajan1602@gmail.com</a>
          <a href="/"><i className="bi bi-envelope"></i> ecom@knobsshop.store</a>
        </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright © 2025 <span className="highlight">Knobs Shop</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default FooterSection
