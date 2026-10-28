import type { IDestination } from "@/types/destinationType";
import FeaturedDestinationsCarousel from "./FeaturedDestinationsCarousel";

const FeaturedDestinations = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/featured-destinations`);

    if (!res.ok) {
        return null;
    }

    const destinations: IDestination[] = await res.json();

    if (!Array.isArray(destinations) || destinations.length === 0) {
        return null;
    }

    return <FeaturedDestinationsCarousel destinations={destinations} />;
};

export default FeaturedDestinations;
