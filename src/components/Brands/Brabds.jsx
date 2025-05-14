import './Brands.css';
import brandImage1 from '../../assets/brand1.png';
import brandImage2 from '../../assets/brand2.png';
import brandImage3 from '../../assets/brand3.png';
import brandImage4 from '../../assets/brand4.png';
import brandImage5 from '../../assets/brand5.png';
import brandImage6 from '../../assets/brand6.png';
import brandImage7 from '../../assets/brand7.png';
import brandImage8 from '../../assets/brand8.png';
import brandImage9 from '../../assets/brand9.png';
import brandImage10 from '../../assets/brand10.png';
import brandImage11 from '../../assets/brand11.png';
import brandImage12 from '../../assets/brand12.png';

const images = [
  brandImage1, brandImage2, brandImage3, brandImage4, brandImage5, brandImage6,
  brandImage7, brandImage8, brandImage9, brandImage10, brandImage11, brandImage12
];

function Brands() {
  return (
    <div className="brands-container">
      <h3 className='mb-4' style={{fontSize:"1.75rem", fontWeight:'700'}}>Trusted by Top Brands</h3>
      <p>We partner with quality brands to bring you durable, design-forward hardware and interiors.</p>

      {/* First row */}
      <div className="marquee">
        <div className="marquee-track">
          {[...images, ...images].map((img, i) => (
            <div className="brand-logo" key={`row1-${i}`}>
              <img src={img} alt={`brand-${i}`} title={img} />
            </div>
          ))}
        </div>
      </div>
        <button className='py-3 px-5 mt-4 all-brand'>See all Brands</button>
      {/* Second row, reverse direction */}
      {/* <div className="marquee reverse">
        <div className="marquee-track">
          {[...images].reverse().concat([...images].reverse()).map((img, i) => (
            <div className="brand-logo" key={`row2-${i}`}>
              <img src={img} alt={`brand-rev-${i}`} />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default Brands;
