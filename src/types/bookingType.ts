import type { IDestination } from "./destinationType";

export type BookingStatus = "confirmed" | "pending";

export interface IBooking extends IDestination {
    username?: string;
    email?: string;
    image?: string;
    deparatureDate?: string;
    bookingDate?: string;
    status?: BookingStatus;
}
