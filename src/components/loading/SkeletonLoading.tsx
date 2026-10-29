import { cn } from "cn";

type SkeletonLoadingProps = {
    className?: string;
};

const SkeletonLoading = ({ className }: SkeletonLoadingProps) => {
    return (
        <div
            aria-hidden="true"
            className={cn(
                "relative overflow-hidden rounded-md bg-neutral-200/70",
                className
            )}
        >
            <span className="absolute inset-0 -translate-x-full animate-shimmer bg-linear-to-r from-transparent via-white/70 to-transparent" />
        </div>
    );
};

export default SkeletonLoading;
