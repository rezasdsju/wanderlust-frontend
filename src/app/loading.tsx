import SkeletonLoading from "@/components/loading/SkeletonLoading";

const GlobalShimmerLoading = () => {
    return (
        <div
            aria-busy="true"
            className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
        >
            <span className="sr-only">Loading page...</span>

            <div className="space-y-3">
                <SkeletonLoading className="h-8 w-64 max-w-full" />
                <SkeletonLoading className="h-4 w-96 max-w-full" />
            </div>

            <SkeletonLoading className="mt-8 h-56 w-full rounded-2xl sm:h-72" />

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
                    >
                        <SkeletonLoading className="aspect-3/2 w-full rounded-none" />
                        <div className="space-y-3 p-4">
                            <SkeletonLoading className="h-3.5 w-24" />
                            <SkeletonLoading className="h-5 w-40 max-w-full" />
                            <SkeletonLoading className="h-3.5 w-32" />
                            <SkeletonLoading className="mt-4 h-4 w-24" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GlobalShimmerLoading;
