import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/models/booking';
import { BookingRequest } from 'src/app/models/booking-request';
import { BookingServiceService } from 'src/app/services/booking-service.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit{

  public bookings: Booking[];
  userEmail = window.sessionStorage.getItem('email');
  constructor(private bookingService: BookingServiceService, private tokenStorageService: TokenStorageService, private router: Router) {}
  ngOnInit(): void {
    this.bookingService.getBookingsByUserEmail(this.userEmail).subscribe(
      {
        next: (result) => {
          this.bookings = result;
        },
        error: (error: any) => {
          console.error('Error:', error);
        }
      }
    );
  }

  onCancel(booking: Booking) {
    // Check if the booking status is not already cancelled
    if (booking.status !== 'CANCELLED') {
      // Update the booking status to 'Cancelled'
      const updatedBookingRequest: BookingRequest = {
        userEmail: this.userEmail,
        trainId: booking.trainDetails.trainId, // Use the correct property name for the trainId
        price: booking.price,
        status: 'CANCELLED',
        passengers: booking.passengers // Assuming passengers array is not needed for cancellation
      };

      this.bookingService.updateBooking(booking.bookingId, updatedBookingRequest).subscribe(
        {
          next: (result) => {
            console.log('Booking cancelled successfully:', result);
            // Optionally, you can update the local bookings array to reflect the updated status
            booking.status = 'CANCELLED';
          },
          error: (error: any) => {
            console.error('Error:', error);
          }
        }
      );

    } else {
      console.log('Booking is already cancelled.');
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigateByUrl('/login');
  }

}
