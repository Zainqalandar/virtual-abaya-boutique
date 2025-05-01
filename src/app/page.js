import OffersBanner from "../../public/offers-banner";
import Categories from "./components/categories";
import FeaturedCollection from "./components/featured-collection";
import Gallery from "./components/Gallery";
import HeroSection from "./components/Hero-section";
import NewsletterSignup from "./components/new-sletter-signup";
import Testimonials from "./components/Testimonials";
import VirtualTryOnPromo from "./components/virtual-try-on-promo";
import WhyChooseUs from "./components/why-choose-us";

export default function Home() {
	return (
		<>
		<HeroSection />
		<FeaturedCollection />
		<VirtualTryOnPromo />
		<Categories />
		<WhyChooseUs />
		<Testimonials />
		<OffersBanner />
		<NewsletterSignup />
		<Gallery />
	
		</>
	);
}
