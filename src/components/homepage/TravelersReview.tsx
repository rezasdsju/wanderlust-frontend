import Image from "next/image";
import { LuArrowLeft, LuArrowRight, LuQuote } from "react-icons/lu";
import Reviewer1 from "../../../public/images/person1.png";
import Reviewer2 from "../../../public/images/person2.png";

const reviews = [
    {
        id: 1,
        name: "Michael Chen",
        location: "Singapore",
        image: Reviewer1,
        text: "The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.",
    },
    {
        id: 2,
        name: "Sarah Johnson",
        location: "New York, USA",
        image: Reviewer2,
        text: "Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!",
    },
];

const TravelersReview = () => {
    return (
        <section className="px-4 sm:px-10 my-16">
            {/* Header */}
            <div className="flex items-end justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-bold">What Travelers Say</h2>
                    <p className="text-neutral-500 mt-1">
                        Real experiences from our happy travelers
                    </p>
                </div>

                <div className="hidden sm:flex items-center gap-3">
                    <button
                        aria-label="Previous review"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-xl transition hover:bg-blue-500 hover:text-white hover:border-blue-500"
                    >
                        <LuArrowLeft />
                    </button>
                    <button
                        aria-label="Next review"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-xl transition hover:bg-blue-500 hover:text-white hover:border-blue-500"
                    >
                        <LuArrowRight />
                    </button>
                </div>
            </div>

        
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="relative flex flex-col sm:flex-row items-center gap-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
                    >
                        <LuQuote className="absolute top-4 right-4 text-4xl text-blue-100" />

                        <Image
                            src={review.image}
                            alt={review.name}
                            className="h-28 w-28 shrink-0 rounded-full object-cover ring-4 ring-blue-100"
                        />

                        <div className="flex flex-col gap-4 text-center sm:text-left">
                            <p className="text-neutral-700 leading-relaxed">
                                “{review.text}”
                            </p>
                            <div>
                                <p className="font-semibold text-blue-500">
                                    — {review.name}
                                </p>
                                <p className="text-sm text-neutral-500">
                                    {review.location}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TravelersReview;