import ShopContent from "./components/products/ShopContent";
import HeroBanner from "./components/HeroBanner";
import Categories from "./components/home-compo/Category";
import OffersSection from "./components/OffersSection";
import FeaturedProducts from "./components/home/FeaturedProducts";
import Testimonials from "./components/home/Testimonials";
import NewArrivals from "./components/home/NewArrivals";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Brands from "./components/home/Brands";
import NewsletterCTA from "./components/home/NewsletterCTA";
import AiRecommendations from "./components/home/AiRecommendations";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Categories />
      <FeaturedProducts />
      <OffersSection />
      <NewArrivals />
      <AiRecommendations />
      <WhyChooseUs />
      <Testimonials />
      <Brands />
      <NewsletterCTA />
    </>
  );
}
