import Image from "next/image";
import DeleteBooking from "./DeleteBooking";
import {
    LuCalendarDays,
    LuCircleCheck,
    LuClock,
    LuEye,
    LuTicket,
} from "react-icons/lu";
import type { IBooking } from "@/types/bookingType";

const formatPrice = (price?: string) => {
    const value = price?.toString().trim() ?? "";
    return value.startsWith("$") ? value : `$${value}`;
};

const formatDate = (value?: string) => {
    if (!value) {
        return "Not set";
    }

    const date = new Date(value);
    return Number.isNaN(date.getTime())
        ? value
        : new Intl.DateTimeFormat("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
          }).format(date);
};

const MyBookingCard = ({ booking }: { booking: IBooking }) => {
    const isPending = booking.status?.toLowerCase() === "pending";
    const departureDate = booking.deparatureDate || booking.departure_date;

    return (
        <article className="flex h-full flex-col gap-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm sm:flex-row">
            <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-lg bg-neutral-100 sm:h-32 sm:w-56">
                {booking.image_url && (
                    <Image
                        src={booking.image_url}
                        alt={booking.destination || "Booking destination"}
                        fill
                        sizes="(max-width: 640px) 100vw, 224px"
                        className="object-cover"
                    />
                )}
            </div>

            <div className="flex flex-1 flex-col">
                <span
                    className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${
                        isPending
                            ? "border-amber-200 bg-amber-50 text-amber-600"
                            : "border-green-200 bg-green-50 text-green-600"
                    }`}
                >
                    {isPending ? (
                        <LuClock className="size-3.5" />
                    ) : (
                        <LuCircleCheck className="size-3.5" />
                    )}
                    {isPending ? "Pending" : "Confirmed"}
                </span>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">
                    {booking.destination}
                </h3>

                <div className="mt-2 flex flex-col gap-1.5 text-sm text-neutral-500">
                    <div className="flex items-center gap-1.5">
                        <LuCalendarDays className="size-4 shrink-0" />
                        <span>Departure: {formatDate(departureDate)}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <LuTicket className="size-4 shrink-0" />
                        <span>Booking ID: {booking._id}</span>
                    </div>
                </div>

                <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-4">
                    <p className="text-2xl font-semibold text-cyan-600">
                        {formatPrice(booking.price)}
                    </p>

                    <div className="flex items-center gap-3">
                        <DeleteBooking booking={booking}></DeleteBooking>

                        <button
                            type="button"
                            className="inline-flex h-8 items-center gap-1.5 rounded-md border border-cyan-600 bg-cyan-600 px-3 text-sm font-medium text-white transition hover:bg-cyan-700"
                        >
                            <LuEye className="size-4" />
                            View
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default MyBookingCard;
