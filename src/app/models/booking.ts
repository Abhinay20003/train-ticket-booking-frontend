import { Passenger } from "./passenger";
import { TrainDetails } from "./train-details";

export class Booking {
    bookingId: number;
    userEmail: string;
    price: number;
    status: string;
    trainDetails?: TrainDetails;
    passengers?: Passenger[];
}
