import "./Home.css"
import { TopNav } from "../../components/TopNav/TopNav";
import { Navbar } from "../../components/Navbar/Navbar";
import { Banner } from "../../components/Banner/Banner";
import { Trust } from "../../components/Trust/Trust";
import { Category } from "../../components/Category/Category";
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts";
import AboutMainContent from "../../components/AboutMainContent/AboutMainContent";
import FooterSection from "../../components/FooterSection/FooterSection";
import FAQ from "../../components/FAQ/FAQ";
import Sale from "../../components/Sale/Sale";
import Kitchen from "../../components/Kitchen/Kitchent";
import Sofa from "../../components/Sofa/Sofa";
import Brands from "../../components/Brands/Brabds";
import NewsletterSection from "../../components/NewsletterSection/NewsletterSection";
import { Testimonial } from "../../components/Testimonial/Testimonial";
import StoreActionCards from "../../components/StoreActionCards/StoreActionCards";
import PromoCarousel from "../../components/PromoCarousel/PromoCarousel";
import DecorPoint from "../../components/DecorPoint/DecorPoint";
import ShopBySpace from "../../components/ShopBySpace/ShopBySpace";
export function Home() {
  return (
    <>
      <TopNav/>
      <Navbar/>
      <Banner/>
      <Trust/>
      <TrendingProducts/>
      <Sofa/>
      {/* <Category/> */}
      <PromoCarousel/>
      <AboutMainContent/>
      <ShopBySpace/>
      <DecorPoint/>
      {/* <Kitchen/> */}
      <Sale/>
      <StoreActionCards/>
      <Testimonial/>
      <Brands/>
      <FAQ/>
      <NewsletterSection/>
      <FooterSection/>
    </>
  );
}
