import type { Metadata } from "next";
import Link from "next/link";
import { LuArrowLeft, LuCompass, LuMapPin } from "react-icons/lu";

export const metadata: Metadata = {
    title: "Page Not Found | Wanderlust",
    description: "The page you are looking for does not exist.",
};

export default function NotFound() {
    return (
        <section className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:py-28">
            <div className="relative">
                <span className="select-none text-[7rem] font-bold leading-none tracking-tight text-neutral-100 sm:text-[10rem]">
                    404
                </span>
                <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex size-14 items-center justify-center rounded-full bg-blue-50 text-blue-600 sm:size-16">
                        <LuCompass className="size-7 sm:size-8" />
                    </span>
                </span>
            </div>

            <h1 className="mt-6 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                Looks like you&apos;ve wandered off the map
            </h1>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-500 sm:text-base">
                The page you are looking for doesn&apos;t exist or may have been
                moved. Let&apos;s get you back on the right path.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
                <Link
                    href="/"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 sm:w-auto"
                >
                    <LuArrowLeft className="size-4" />
                    Back to Home
                </Link>

                <Link
                    href="/all-destinations"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 sm:w-auto"
                >
                    <LuMapPin className="size-4" />
                    Explore Destinations
                </Link>
            </div>
        </section>
    );
}
