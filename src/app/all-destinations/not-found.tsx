import type { Metadata } from "next";
import Link from "next/link";
import { LuArrowLeft, LuMapPin, LuSearch } from "react-icons/lu";

export const metadata: Metadata = {
    title: "Destination Not Found | Wanderlust",
    description: "The destination you are looking for could not be found.",
};

export default function DestinationNotFound() {
    return (
        <section className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:py-28">
            <span className="flex size-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <LuSearch className="size-8" />
            </span>

            <h1 className="mt-6 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                Destination not found
            </h1>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-500 sm:text-base">
                We couldn&apos;t find the destination you&apos;re looking for. It may
                have been removed, or the link could be incorrect.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
                <Link
                    href="/all-destinations"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 sm:w-auto"
                >
                    <LuMapPin className="size-4" />
                    Browse All Destinations
                </Link>

                <Link
                    href="/"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 sm:w-auto"
                >
                    <LuArrowLeft className="size-4" />
                    Back to Home
                </Link>
            </div>
        </section>
    );
}
