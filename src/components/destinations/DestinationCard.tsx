import Image from "next/image";
import { IoLocationOutline, IoStar, IoTimeOutline } from "react-icons/io5";
import { LuArrowUpRight } from "react-icons/lu";
import type { IDestination } from "@/types/destinationType";

const DestinationCard = ({ destination }: { destination: IDestination }) => {
    const price = destination.price?.toString().trim() ?? "";
    const displayPrice = price.startsWith("$") ? price : `$${price}`;

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="relative aspect-3/2 w-full overflow-hidden">
                {
                    destination.image_url &&
                    <Image
                        src={destination.image_url}
                        alt={destination?.destination || 'Destination Image'}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                    />
                }

                <div className="absolute top-3 right-3 flex items-center gap-1 rounded-md bg-white/95 px-2 py-1 text-sm font-medium text-neutral-900 shadow-sm">
                    <span>{destination.rating ?? 4.5}</span>
                    <IoStar className="size-3.5" />
                </div>
            </div>

            <div className="flex flex-1 flex-col p-4">
                <div className="flex items-center gap-1.5 text-sm text-neutral-500">
                    <IoLocationOutline className="size-4 shrink-0" />
                    <span>{destination.country}</span>
                </div>

                <div className="mt-1 flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold text-neutral-900">
                        {destination.destination}
                    </h3>
                    {price && (
                        <p className="shrink-0 text-lg font-semibold text-neutral-900">
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

                <div className="mt-auto border-t border-neutral-100 pt-3">
                    <button
                        type="button"
                        className="flex items-center gap-2 text-sm font-semibold tracking-wide text-sky-600 uppercase transition hover:text-sky-700"
                    >
                        Book Now
                        <LuArrowUpRight className="size-4" />
                    </button>
                </div>
            </div>
        </article>
    );
};

export default DestinationCard;
