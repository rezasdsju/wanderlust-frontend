import SkeletonLoading from "@/components/loading/SkeletonLoading";

const MyBookingsLoading = () => {
    return (
        <section
            aria-busy="true"
            className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8"
        >
            <span className="sr-only">Loading your bookings...</span>

            <div className="border-b border-neutral-200 pb-4">
                <SkeletonLoading className="h-9 w-48" />
                <SkeletonLoading className="mt-2 h-4 w-80 max-w-full" />
            </div>

            <div className="mt-6 flex flex-col gap-4">
                {Array.from({ length: 3 }).map((_, index) => (
                    <article
                        key={index}
                        className="flex h-full flex-col gap-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm sm:flex-row"
                    >
                        <SkeletonLoading className="h-40 w-full shrink-0 rounded-lg sm:h-32 sm:w-56" />

                        <div className="flex flex-1 flex-col">
                            <SkeletonLoading className="h-6 w-24 rounded-full" />
                            <SkeletonLoading className="mt-3 h-7 w-56 max-w-full" />

                            <div className="mt-3 space-y-2">
                                <SkeletonLoading className="h-4 w-64 max-w-full" />
                                <SkeletonLoading className="h-4 w-72 max-w-full" />
                            </div>

                            <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-4">
                                <SkeletonLoading className="h-7 w-24" />
                                <div className="flex items-center gap-3">
                                    <SkeletonLoading className="h-8 w-20 rounded-md" />
                                    <SkeletonLoading className="h-8 w-20 rounded-md" />
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default MyBookingsLoading;
