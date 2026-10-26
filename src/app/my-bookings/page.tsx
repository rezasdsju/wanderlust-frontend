import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import MyBookingCard from "@/components/bookings/MyBookingCard";
import type { IBooking } from "@/types/bookingType";

const MyBookingPage = async() => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/my-bookings/${user?.email}`)
    if (!res.ok){
        throw new Error('Failed to fetch bookings data')
    }
    const bookings: IBooking[] = await res.json()
 
    return (
        <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="border-b border-neutral-200 pb-4">
                <h1 className="text-3xl font-medium tracking-tight text-neutral-900">
                    My Bookings
                </h1>
                <p className="mt-1 text-sm text-neutral-500">
                    Manage and view your upcoming travel plans
                </p>
            </div>

            <div className="mt-6 flex flex-col gap-4">
                {bookings.length > 0 ? (
                    bookings.map((booking) => (
                        <MyBookingCard key={booking._id} booking={booking} />
                    ))
                ) : (
                    <p className="rounded-xl border border-neutral-200 bg-white p-8 text-center text-sm text-neutral-500">
                        You have no bookings yet.
                    </p>
                )}
            </div>
        </section>
    );
};

export default MyBookingPage;