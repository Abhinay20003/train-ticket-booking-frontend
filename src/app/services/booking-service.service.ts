import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';
import { Observable } from 'rxjs';
import { BookingRequest } from '../models/booking-request';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class BookingServiceService {

  private apiUrl = 'http://localhost:8080/api/v1/booking';

  constructor(private http: HttpClient) {}

  makeBooking(bookingRequest: BookingRequest): Observable<Booking> {
    return this.http.post<Booking>(`${this.apiUrl}/make-booking`, bookingRequest, httpOptions);
  }

  getAllBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.apiUrl}/getAllBookings`);
  }

  getBookingById(bookingId: number): Observable<Booking> {
    return this.http.get<Booking>(`${this.apiUrl}/getBookingById/${bookingId}`);
  }

  updateBooking(bookingId: number, updatedBookingRequest: BookingRequest): Observable<Booking> {
    return this.http.put<Booking>(`${this.apiUrl}/update/${bookingId}`, updatedBookingRequest);
  }

  getBookingsByUserEmail(userEmail: string): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.apiUrl}/getBooking/${userEmail}`);
  }

}
