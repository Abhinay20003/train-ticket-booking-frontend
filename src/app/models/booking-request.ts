import { Passenger } from "./passenger";

export class BookingRequest {
  userEmail: string;
  trainId: number;
  price: number;
  status: string;
  passengers: Passenger[];

  constructor(userEmail: string, trainId: number, price: number, status: string, passengers: Passenger[]) {
    this.userEmail = userEmail;
    this.trainId = trainId;
    this.price = price;
    this.status = status;
    this.passengers = passengers;
  }
}
