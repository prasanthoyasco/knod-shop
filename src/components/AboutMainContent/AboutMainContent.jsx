import './AboutMainContent.css'
import aboutImage1 from '../../assets/plywood.png'
function AboutMainContent() {
  return (
    <div className='About-Main-Content-Container my-5'>
        <div className='plywood-text-container'>
          <p className='top'>Welcome to <strong>Pankaj Plywood</strong> </p>
          <h1>Strength Beneath the Surface</h1>
          <p>Backed by decades of trust, our <strong>plywood and fittings</strong> are engineered to perform—built for the Bedroom of tomorrow.</p>
          <button>See our Material Promise</button>
        </div>
        <img src={aboutImage1} className='about-main-content-image'/>
    </div>
  )
}

export default AboutMainContent
