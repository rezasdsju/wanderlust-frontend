import SkeletonLoading from "@/components/loading/SkeletonLoading";

const AllDestinationsLoading = () => {
    return (
        <div
            aria-busy="true"
            className="my-10"
        >
            <span className="sr-only">Loading destinations...</span>

            <div className="space-y-2">
                <SkeletonLoading className="h-9 w-80 max-w-full" />
                <SkeletonLoading className="h-4 w-full max-w-md" />
            </div>

            <div className="my-3 flex items-center justify-between gap-4">
                {Array.from({ length: 3 }).map((_, index) => (
                    <SkeletonLoading
                        key={index}
                        className="h-9 flex-1 rounded-md"
                    />
                ))}
            </div>

            <SkeletonLoading className="mt-3 h-4 w-44" />

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
                    >
                        <SkeletonLoading className="aspect-3/2 w-full rounded-none" />

                        <div className="flex flex-1 flex-col p-4">
                            <SkeletonLoading className="h-4 w-24" />
                            <div className="mt-2 flex items-start justify-between gap-2">
                                <SkeletonLoading className="h-5 w-36 max-w-full" />
                                <SkeletonLoading className="h-5 w-16 shrink-0" />
                            </div>
                            <SkeletonLoading className="mt-2 h-4 w-28" />
                            <div className="mt-auto border-t border-neutral-100 pt-3">
                                <SkeletonLoading className="h-4 w-24" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllDestinationsLoading;
