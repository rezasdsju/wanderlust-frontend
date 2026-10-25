export interface IDestination {
    _id: string;
    destination: string;
    country: string;
    category: string;
    price: string;
    duration: string;
    departure_date: string;
    image_url: string;
    description: string;
    rating?: number;
    reviews?: number;
    highlights?: string[];
}