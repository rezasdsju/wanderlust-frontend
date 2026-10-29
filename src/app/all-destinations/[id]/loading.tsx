import SkeletonLoading from "@/components/loading/SkeletonLoading";

const DestinationDetailsLoading = () => {
    return (
        <section
            aria-busy="true"
            className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8"
        >
            <span className="sr-only">Loading destination details...</span>

            <SkeletonLoading className="h-4 w-40" />

            <SkeletonLoading className="mt-4 aspect-13/5 min-h-60 w-full rounded-lg sm:min-h-0" />

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12">
                <div>
                    <SkeletonLoading className="h-4 w-24" />
                    <SkeletonLoading className="mt-2 h-10 w-96 max-w-full" />

                    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                        <SkeletonLoading className="h-4 w-40" />
                        <SkeletonLoading className="h-4 w-28" />
                    </div>

                    <div className="mt-8">
                        <SkeletonLoading className="h-7 w-32" />
                        <div className="mt-3 space-y-2">
                            <SkeletonLoading className="h-4 w-full" />
                            <SkeletonLoading className="h-4 w-full" />
                            <SkeletonLoading className="h-4 w-3/4" />
                        </div>
                    </div>

                    <div className="mt-8">
                        <SkeletonLoading className="h-7 w-32" />
                        <div className="mt-3 space-y-2">
                            <SkeletonLoading className="h-4 w-full" />
                            <SkeletonLoading className="h-4 w-2/3" />
                        </div>

                        <div className="mt-4 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <SkeletonLoading key={index} className="h-4 w-52 max-w-full" />
                            ))}
                        </div>
                    </div>
                </div>

                <aside className="h-fit rounded-lg border border-neutral-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
                    <SkeletonLoading className="h-4 w-24" />
                    <SkeletonLoading className="mt-2 h-9 w-32" />
                    <SkeletonLoading className="mt-2 h-4 w-20" />

                    <div className="my-5 border-t border-neutral-200" />

                    <SkeletonLoading className="h-10 w-full rounded-md" />
                    <SkeletonLoading className="mt-4 h-10 w-full rounded-md" />

                    <div className="mt-5 space-y-3">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <SkeletonLoading key={index} className="h-3.5 w-full" />
                        ))}
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default DestinationDetailsLoading;
