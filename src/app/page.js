import OffersBanner from "../../public/offers-banner";
import Categories from "./components/categories";
import FeaturedCollection from "./components/featured-collection";
import Gallery from "./components/Gallery";
import HeroSection from "./components/Hero-section";
import NewsletterSignup from "./components/new-sletter-signup";
import Testimonials from "./components/Testimonials";
import TryOnAdjust from "./components/try-on-adjust";
import TryOnOverlay from "./components/try-on-overlay";
import TryOnWebcam from "./components/try-on-webcam";
import UploadAndTryOn from "./components/uploadAnd-try-on";
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
		{/* <TryOnWebcam /> */}
		{/* <TryOnOverlay /> */}
		{/* <h1 className="text-2xl font-bold mb-4">Try On Abaya</h1> */}
      {/* <UploadAndTryOn /> */}
	  <TryOnAdjust />
		
	
		</>
	);
}
