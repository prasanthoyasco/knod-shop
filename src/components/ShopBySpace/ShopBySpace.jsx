import './ShopBySpace.css';
import { useEffect, useRef } from 'react';

import studyOffice from "../../assets/study-office.png";
import bedroom from "../../assets/bedroom.png";
import livingRoom from "../../assets/living-room.png";

const spaceData = [
  {
    title: 'Living Room',
    subtitle: 'Discover Living',
    image: livingRoom,
  },
  {
    title: 'Bedroom',
    subtitle: 'View Bedroom',
    image: bedroom,
  },
  {
    title: 'Study & Home Office',
    subtitle: 'Set Up Your Space',
    image: studyOffice,
  },
  {
    title: 'Bedroom',
    subtitle: 'View Bedroom',
    image: bedroom,
  },
  {
    title: 'Study & Home Office',
    subtitle: 'Set Up Your Space',
    image: studyOffice,
  },
];

const ShopBySpace = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;
    const cardWidth = container?.firstChild?.offsetWidth || 400; // fallback

    const scrollInterval = setInterval(() => {
      if (!container) return;

      scrollAmount += cardWidth + 16; // include gap

      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 3000); // every 3 seconds

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="shop-by-space">
      <h2 className="space-heading">Shop by Space</h2>
      <p className="space-subheading">
        Find essentials tailored for every corner of your home.
      </p>
      <div className="space-scroll-container" ref={scrollRef}>
        {spaceData.map((item, index) => (
          <div key={index} className="space-card">
            <img src={item.image} alt={item.title} className="space-image" />
            <div className="space-info">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopBySpace;
