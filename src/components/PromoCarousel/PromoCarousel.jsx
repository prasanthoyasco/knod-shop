import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination ,Autoplay} from 'swiper/modules'; // ← Import this
import 'swiper/css';
import 'swiper/css/pagination'; // ← Add this
import './PromoCarousel.css';
import cabinat from '../../assets/cabinet.png'
import promoChair from '../../assets/promo-chair.png'

const promoData = [
  {
    title: 'Flat 20% Discount',
    heading: 'Elegant Storage Cabinets',
    description: 'Upgrade your space with functional & stylish cabinets.',
    image: cabinat, // Replace with actual image paths
    bg: '#f5f5f5',
    buttonColor: '#7b5e4b',
  },
  {
    title: 'Flat 18% Discount',
    heading: 'Premium Office Chairs',
    description: 'Designed for comfort & performance—perfect for long hours.',
    image: promoChair,
    bg: '#8d5d34',
    textColor: '#fff',
    buttonColor: '#000',
  },
  {
    title: 'Flat 20% Discount',
    heading: 'Elegant Storage Cabinets',
    description: 'Upgrade your space with functional & stylish cabinets.',
    image: cabinat, // Replace with actual image paths
    bg: '#f5f5f5',
    buttonColor: '#7b5e4b',
  },
  {
    title: 'Flat 18% Discount',
    heading: 'Premium Office Chairs',
    description: 'Designed for comfort & performance—perfect for long hours.',
    image: promoChair,
    bg: '#8d5d34',
    textColor: '#fff',
    buttonColor: '#000',
  },
];

const PromoCarousel = () => {
  return (
    <div className="promo-carousel">
      <Swiper
  modules={[Pagination, Autoplay]}
  spaceBetween={24}
  loop
  slidesPerView={2}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  breakpoints={{
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
  }}
>


        {promoData.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="promo-card" style={{ backgroundColor: item.bg, color: item.textColor || '#000' }}>
              <div className="promo-content">
                <p className="promo-title">{item.title}</p>
                <h3 className="promo-heading">{item.heading}</h3>
                <p className="promo-description">{item.description}</p>
                <button
                  className="promo-button"
                  style={{ backgroundColor: item.buttonColor }}
                >
                  Shop now →
                </button>
              </div>
              <img src={item.image} alt={item.heading} className="promo-image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PromoCarousel;
