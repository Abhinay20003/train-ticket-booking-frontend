import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtrains',
  templateUrl: './addtrains.component.html',
  styleUrls: ['./addtrains.component.css']
})
export class AddtrainsComponent implements OnInit{
  selectedtrainName: string;
  selectedtrainNumber: BigInteger;
  selectedSource: string;
  selectedDestination: string;
  selectedDate: string;
  selectedClass:string;
  selectedQuota:string;
  selectedPrice: Float32Array;
  destinationOptions: string[];

 ngOnInit(): void {
   
  }
  public trains;
  cities: string[] = ['Hyderabad', 'Delhi', 'Mumbai','Kolkata','Pune','Bangalore','Chennai','Lucknow'];
  classes: string[] = ['Sleeper(SL)','First Class(FC)','Second Class(2S)','AC First Class (1A)','AC 2 Tier (2A)','AC 3 Tier (3A)','AC 3 Economy (3E)'];
  quotas: string[] = ['General','Tatkal','Ladies','Lower Berth/ Sr. Citizen','Premium Tatkal','Duty Pass','Person with disability'];
 showSelectedInfo: boolean = false;
  today: string; // Property to hold the current date

  constructor(  private router:Router) {
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
    const selectedInfo = {
      selectedtrainName:this.selectedtrainName,
      selectedtrainNumber:this.selectedtrainNumber,
      selectedSource: this.selectedSource,
      selectedDestination: this.selectedDestination,
      selectedDate: this.selectedDate,
      selectedClass: this.selectedClass,
      selectedQuota: this.selectedQuota,
      selectedPrice:this.selectedPrice
    };
    console.log(selectedInfo)
  }
}