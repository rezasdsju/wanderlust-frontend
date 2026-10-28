import DestinationDetails from "@/components/destinations/DestinationDetails";
import { auth } from "@/lib/auth";
import type { IDestination } from "@/types/destinationType";
import { headers } from "next/headers";

const DestinationDetailPage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;
    const jwtToken = await auth.api.getToken({
        headers: await headers()
    })
    // console.log('token: ',jwtToken?.token)
    const token = jwtToken?.token
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
