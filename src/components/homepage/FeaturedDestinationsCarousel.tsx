"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoLocationOutline, IoStar, IoTimeOutline } from "react-icons/io5";
import { LuArrowLeft, LuArrowRight, LuArrowUpRight } from "react-icons/lu";
import type { IDestination } from "@/types/destinationType";
import FallbackDestinationImage from "../../../public/images/destinations/image4.png";

const FeaturedDestinationsCarousel = ({
    destinations,
}: {
    destinations: IDestination[];
}) => {
    const viewportRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [page, setPage] = useState(0);
    const [cardStep, setCardStep] = useState(0);
    const [visibleCount, setVisibleCount] = useState(1);

    useEffect(() => {
        const viewport = viewportRef.current;
        const track = trackRef.current;

        if (!viewport || !track) {
            return;
        }

        const measure = () => {
            const card = track.firstElementChild as HTMLElement | null;

            if (!card) {
                return;
            }

            const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
            const cardWidth = card.getBoundingClientRect().width;

            if (!cardWidth) {
                return;
            }

            setCardStep(cardWidth + gap);
            setVisibleCount(
                Math.max(
                    1,
                    Math.round((viewport.clientWidth + gap) / (cardWidth + gap))
                )
            );
        };

        measure();

        const observer = new ResizeObserver(measure);
        observer.observe(viewport);
        observer.observe(track);

        return () => observer.disconnect();
    }, [destinations.length]);

    const pageCount = Math.max(1, Math.ceil(destinations.length / visibleCount));
    const currentPage = Math.min(page, pageCount - 1);
    const maxStartIndex = Math.max(0, destinations.length - visibleCount);
    const firstIndex = Math.min(currentPage * visibleCount, maxStartIndex);

    const goTo = (nextPage: number) => {
        setPage(Math.max(0, Math.min(nextPage, pageCount - 1)));
    };

    return (
        <section className="px-4 sm:px-10 my-16">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <h2 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
                        Featured Destinations
                    </h2>
                    <p className="mt-1 text-sm text-neutral-500 sm:text-base">
                        Handpicked travel experiences for the adventure seekers
                    </p>
                </div>

                <Link
                    href="/all-destinations"
                    className="inline-flex items-center justify-center gap-2 self-start border border-sky-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-sky-600 transition hover:bg-sky-50 sm:self-auto"
                >
                    All Destinations
                    <LuArrowRight className="size-4" />
                </Link>
            </div>

            <div ref={viewportRef} className="mt-8 overflow-hidden">
                <div
                    ref={trackRef}
                    className="flex gap-6 transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${firstIndex * cardStep}px)` }}
                >
                    {destinations.map((destination) => {
                        const price = destination.price?.toString().trim() ?? "";
                        const displayPrice = price.startsWith("$") ? price : `$${price}`;

                        return (
                            <article
                                key={destination._id}
                                className="group flex w-full shrink-0 flex-col bg-white md:w-[calc((100%-1.5rem)/2)] xl:w-[calc((100%-3rem)/3)]"
                            >
                                <Link
                                    href={`/all-destinations/${destination._id}`}
                                    className="flex h-full flex-col"
                                >
                                    <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-100">
                                        <Image
                                            src={destination.image_url || FallbackDestinationImage}
                                            alt={destination.destination || "Destination image"}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                            className="object-cover transition duration-500 group-hover:scale-105"
                                        />

                                        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-sm bg-white px-2 py-1 text-sm font-medium text-neutral-900 shadow-sm">
                                            <span>{destination.rating ?? 4.5}</span>
                                            <IoStar className="size-3.5" />
                                        </div>
                                    </div>

                                    <div className="flex flex-1 flex-col pt-3">
                                        <div className="flex items-center gap-1.5 text-sm text-neutral-500">
                                            <IoLocationOutline className="size-4 shrink-0" />
                                            <span>{destination.country}</span>
                                        </div>

                                        <div className="mt-1 flex items-start justify-between gap-3">
                                            <h3 className="text-lg font-semibold text-neutral-900 sm:text-xl">
                                                {destination.destination}
                                            </h3>
                                            {price && (
                                                <p className="shrink-0 text-lg font-semibold text-neutral-900 sm:text-xl">
                                                    {displayPrice}
                                                    <span className="text-sm font-normal text-neutral-500">
                                                        /Person
                                                    </span>
                                                </p>
                                            )}
                                        </div>

                                        <div className="mt-1 flex items-center gap-1.5 text-sm text-neutral-500">
                                            <IoTimeOutline className="size-4 shrink-0" />
                                            <span>{destination.duration}</span>
                                        </div>

                                        <div className="mt-auto border-t border-neutral-200 pt-3">
                                            <span className="flex items-center gap-2 text-sm font-semibold tracking-wide text-sky-600 uppercase transition group-hover:text-sky-700">
                                                Book Now
                                                <LuArrowUpRight className="size-4" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        );
                    })}
                </div>
            </div>

            <div className="mt-8 flex items-center gap-5">
                <span className="text-xl text-neutral-900 tabular-nums sm:text-2xl">
                    {currentPage + 1}/{pageCount}
                </span>

                <div className="h-px flex-1 bg-neutral-200" />

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        aria-label="Previous destinations"
                        onClick={() => goTo(currentPage - 1)}
                        disabled={currentPage === 0}
                        className="flex size-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-500 transition hover:border-sky-500 hover:bg-sky-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-neutral-300 disabled:hover:bg-transparent disabled:hover:text-neutral-500"
                    >
                        <LuArrowLeft className="size-4" />
                    </button>
                    <button
                        type="button"
                        aria-label="Next destinations"
                        onClick={() => goTo(currentPage + 1)}
                        disabled={currentPage === pageCount - 1}
                        className="flex size-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-500 transition hover:border-sky-500 hover:bg-sky-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-neutral-300 disabled:hover:bg-transparent disabled:hover:text-neutral-500"
                    >
                        <LuArrowRight className="size-4" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedDestinationsCarousel;
