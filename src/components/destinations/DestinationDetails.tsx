import Image from "next/image";
import Link from "next/link";
import {
    LuArrowLeft,
    LuArrowRight,
    LuCalendarDays,
    LuCheck,
    LuMapPin,
} from "react-icons/lu";
import { IoStar } from "react-icons/io5";
import type { IDestination } from "@/types/destinationType";
import { EditDestination } from "./EditDestination";
import DeleteDestination from "./DeleteDestination";
const benefits = [
    "Free cancellation up to 7 days",
    "Travel insurance included",
    "24/7 customer support",
];

const buildHighlights = (destination: IDestination) => {
    if (destination.highlights?.length) {
        return destination.highlights;
    }

    return [
        `Comfortable stay in ${destination.destination}`,
        `Guided ${destination.category?.toLowerCase() || "local"} experiences`,
        `Local sightseeing across ${destination.country}`,
        "Airport transfers and on-trip support",
    ];
};

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

const DestinationDetails = ({ destination }: { destination: IDestination }) => {
    const highlights = buildHighlights(destination);
    const reviews = destination.reviews ?? 234;

    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <Link
                    href="/all-destinations"
                    className="inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-neutral-900"
                >
                    <LuArrowLeft className="size-4" />
                    Back to Destinations
                </Link>

                <div className="flex items-center gap-2">

                        <EditDestination destination={destination}></EditDestination>
                    <DeleteDestination destination={destination}></DeleteDestination>

                </div>
            </div>

            <div className="relative mt-4 aspect-13/5 min-h-60 w-full overflow-hidden rounded-lg bg-neutral-100 sm:min-h-0">
                {destination.image_url && (
                    <Image
                        src={destination.image_url}
                        alt={destination.destination || "Destination image"}
                        fill
                        sizes="(max-width: 1280px) 100vw, 1280px"
                        fetchPriority="high"
                        className="object-cover"
                    />
                )}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12">
                <div>
                    <div className="flex items-center gap-1.5 text-sm text-neutral-500">
                        <LuMapPin className="size-4 shrink-0" />
                        <span>{destination.country}</span>
                    </div>

                    <h1 className="mt-1 text-4xl font-medium tracking-tight text-neutral-900">
                        {destination.destination}
                    </h1>

                    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-500">
                        <div className="flex items-center gap-1.5">
                            <IoStar className="size-4 text-green-500" />
                            <span className="font-semibold text-neutral-900">
                                {destination.rating ?? 4.5}
                            </span>
                            <span>({reviews} reviews)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <LuCalendarDays className="size-4 shrink-0" />
                            <span>{destination.duration}</span>
                        </div>
                    </div>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-neutral-900">Overview</h2>
                        <p className="mt-2 leading-relaxed text-neutral-500">
                            {destination.description}
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-neutral-900">Highlights</h2>
                        <p className="mt-2 leading-relaxed text-neutral-500">
                            {destination.description}
                        </p>

                        <ul className="mt-4 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
                            {highlights.map((highlight) => (
                                <li
                                    key={highlight}
                                    className="flex items-start gap-2 text-sm text-neutral-600"
                                >
                                    <LuCheck className="mt-0.5 size-4 shrink-0 text-green-600" />
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                <aside className="h-fit rounded-lg border border-neutral-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
                    <p className="text-sm text-neutral-500">Starting from</p>
                    <p className="mt-1 text-3xl font-semibold text-cyan-600">
                        {formatPrice(destination.price)}
                    </p>
                    <p className="text-sm text-neutral-500">per person</p>

                    <div className="my-5 border-t border-neutral-200" />

                    <label htmlFor="departure-date" className="sr-only">
                        Departure date
                    </label>
                    <input
                        id="departure-date"
                        type="date"
                        defaultValue={toDateInputValue(destination.departure_date)}
                        className="h-10 w-full rounded-md border border-neutral-200 bg-neutral-50 px-3 text-sm text-neutral-700 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                    />

                    <button
                        type="button"
                        className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-md bg-cyan-600 text-sm font-medium text-white transition hover:bg-cyan-700"
                    >
                        Book Now
                        <LuArrowRight className="size-4" />
                    </button>

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
            </div>
        </section>
    );
};

export default DestinationDetails;