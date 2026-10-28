import Banner from "@/components/homepage/Banner";
import TravelersReview from "@/components/homepage/TravelersReview";
import CTASection from "@/components/homepage/CTASection";
import FeaturedDestinations from "@/components/homepage/FeaturedDestinations";
export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedDestinations></FeaturedDestinations>
      <TravelersReview></TravelersReview>
      <CTASection></CTASection>
    </div>
  );
}
