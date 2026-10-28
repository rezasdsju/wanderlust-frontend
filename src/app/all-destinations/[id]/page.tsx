import DestinationDetails from "@/components/destinations/DestinationDetails";
import getTokenFromServer from "@/lib/getTokenFromServer";
import type { IDestination } from "@/types/destinationType";


const DestinationDetailPage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;

    const token = await getTokenFromServer()
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/destinations/${id}`,{
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    if (!res.ok) {
        throw new Error("Failed to Fetch");
    }
    const destination: IDestination = await res.json();

    return <DestinationDetails destination={destination} />;
};

export default DestinationDetailPage;
