import './DecorPoint.css'
import aboutImage1 from '../../assets/decor.png'
function DecorPoint() {
  return (
    <div className='About-Main-Content-Container my-5'>
        <div className='plywood-text-container'>
          <p className='top'>Welcome to <strong>Décor Point</strong> </p>
          <h1>Elevate your space with elegance & precision.</h1>
          <p>Our Décor are more than hardware—they're statements. Choose from classic, modern, or artisanal designs that elevate any furniture or space.</p>
          <button className='decor-btn'>See Décor Collection</button>
        </div>
        <img src={aboutImage1} className='about-main-content-image'/>
    </div>
  )
}

export default DecorPoint
