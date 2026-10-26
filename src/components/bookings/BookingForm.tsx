'use client'
import { authClient } from "@/lib/auth-client";
import type { IDestination } from "@/types/destinationType";
import { useRouter } from "next/navigation";
import React from "react";



import {
    LuArrowRight,
    LuCheck,
} from "react-icons/lu";





const formatPrice = (price: string) => {
    const value = price?.toString().trim() ?? "";
    return value.startsWith("$") ? value : `$${value}`;
};

const toDateInputValue = (value: string) => {
    if (!value) {
        return "";
    }

    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? "" : date.toISOString().slice(0, 10);
};
const benefits = [
    "Free cancellation up to 7 days",
    "Travel insurance included",
    "24/7 customer support",
];


const BookingForm = ({ destination }: { destination: IDestination }) => {
    const router = useRouter()
    const { data: session } = authClient.useSession()
    const user = session?.user
    const handleBooking = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const { deparatureDate } = Object.fromEntries(formData.entries()) as { deparatureDate: string }
        // console.log('deparatureDate: ',deparatureDate)

        const data = {
            username: user?.name,
            email: user?.email,
            image: user?.image,
            ...destination,
            deparatureDate: deparatureDate,
            bookingDate: new Date()

        }
        // console.log(data)
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/booking`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        if (!res.ok){
            console.log('Error occured to booking')
        }
        const result = await res.json()
        // console.log(result)
        if (result.acknowledged){
            console.log('Successfull Booking')
            router.replace('/all-destinations')

        }
    }
    return (
        <aside className="h-fit rounded-lg border border-neutral-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
            <p className="text-sm text-neutral-500">Starting from</p>
            <p className="mt-1 text-3xl font-semibold text-cyan-600">
                {formatPrice(destination.price)}
            </p>
            <p className="text-sm text-neutral-500">per person</p>

            <div className="my-5 border-t border-neutral-200" />

            <form onSubmit={handleBooking}>
                <label htmlFor="departure-date" className="sr-only">
                    Departure date
                </label>
                <input
                    name="deparatureDate"
                    id="departure-date"
                    type="date"
                    defaultValue={toDateInputValue(destination.departure_date)}
                    className="h-10 w-full rounded-md border border-neutral-200 bg-neutral-50 px-3 text-sm text-neutral-700 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />

                <button
                    type="submit"
                    className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-md bg-cyan-600 text-sm font-medium text-white transition hover:bg-cyan-700"
                >
                    Book Now
                    <LuArrowRight className="size-4" />
                </button>
            </form>

            <ul className="mt-5 space-y-3">
                {benefits.map((benefit) => (
                    <li
                        key={benefit}
                        className="flex items-center gap-2 text-xs text-neutral-600"
                    >
                        <LuCheck className="size-3.5 shrink-0 text-green-600" />
                        <span>{benefit}</span>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default BookingForm;