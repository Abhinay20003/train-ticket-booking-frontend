import { Passenger } from "./passenger";

export class BookingRequest {
  userEmail: string;
  trainId: number;
  price: number;
  passengers: Passenger[];

  constructor(userEmail: string, trainId: number, price: number, passengers: Passenger[]) {
    this.userEmail = userEmail;
    this.trainId = trainId;
    this.price = price;
    this.passengers = passengers;
  }
}
