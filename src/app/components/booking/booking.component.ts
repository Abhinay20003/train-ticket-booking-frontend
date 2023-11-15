import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  cities: string[] = ['Hyderabad', 'Delhi', 'Mumbai','Kolkata','Pune']; // Replace with your actual city names
  selectedSource: string;
  selectedDestination: string;
  showSelectedInfo: boolean = false;
  destinationOptions: string[];
  selectedDate: string;
  today: string; // Property to hold the current date
 

  constructor() {
    // Set the initial options for the destination dropdown
    this.destinationOptions = this.cities.slice();
    this.today = new Date().toISOString().split('T')[0];
  }
 
  onSourceChange() {
    // Update destination options based on the selected source
    this.destinationOptions = this.cities.filter(city => city !== this.selectedSource);
    this.selectedDestination = null; // Reset the destination when the source changes
  }
 
  onSubmit() {
 
      this.showSelectedInfo = true;

  }
}
