

import AllDestinations from "@/components/destinations/AllDestinations";
import type { IDestination } from "@/types/destinationType";

const AllDestinationPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/destinations/`)
    const destinations: IDestination[] = await res.json()


    
    return (
        <AllDestinations destinations={destinations}></AllDestinations>
    );
};

export default AllDestinationPage;