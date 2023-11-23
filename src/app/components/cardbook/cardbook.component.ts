import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TrainDetails } from 'src/app/models/train-details';
import { TrainRequest } from 'src/app/models/train-request';
import { BookService } from 'src/app/services/book.service';
import { TrainSearchService } from 'src/app/services/train-search.service';

@Component({
  selector: 'app-cardbook',
  templateUrl: './cardbook.component.html',
  styleUrls: ['./cardbook.component.css']
})

export class CardbookComponent implements OnInit{
  selectedSource: string;
  selectedDestination: string;
  selectedDate: string;
  selectedClass:string;
  selectedQuota:string;
  destinationOptions: string[];
  ngOnInit(): void {
    // this.getAllBookings();
  }

  public trains;
  cities: string[] = ['Hyderabad', 'Delhi', 'Mumbai','Kolkata','Pune','Bangalore','Chennai','Lucknow'];
  classes: string[] = ['Sleeper(SL)','First Class(FC)','Second Class(2S)','AC First Class (1A)','AC 2 Tier (2A)','AC 3 Tier (3A)','AC 3 Economy (3E)'];
  quotas: string[] = ['General','Tatkal','Ladies','Lower Berth/ Sr. Citizen','Premium Tatkal','Duty Pass','Person with disability'];
 
  showSelectedInfo: boolean = false;
  today: string; // Property to hold the current date
 

  constructor( private sharedService:BookService, private trainService:TrainSearchService, private router:Router) {
    // Set the initial options for the destination dropdown
    this.destinationOptions = this.cities.slice();
    this.today = new Date().toISOString().split('T')[0];
  }
 
  onSourceChange() {
    // Update destination options based on the selected source
    this.destinationOptions = this.cities.filter(city => city !== this.selectedSource);
    this.selectedDestination = null; // Reset the destination when the source changes
  }

  getAllBookings() {
    this.trainService.getAllTrains().subscribe(
      {
        next: (result) => {
          this.trains = result;
        }
      } 
    )
  }
 
  onSubmit() {
 
      this.showSelectedInfo = true;
      const selectedInfo = {
        selectedSource: this.selectedSource,
        selectedDestination: this.selectedDestination,
        selectedDate: this.selectedDate,
        selectedClass: this.selectedClass,
        selectedQuota: this.selectedQuota
      };
  
      this.sharedService.updateSelectedInfo(selectedInfo);

      const searchParameters: TrainRequest = {
        source: this.selectedSource,
        destination: this.selectedDestination,
        classes: this.selectedClass,
        quota: this.selectedQuota,
        date: this.selectedDate
      }

      console.log(searchParameters);

      this.trainService.searchTrain(searchParameters).subscribe(
        {
          next: (result) => {
              this.trains = result;
              console.log("Succesfull!")
              console.log(this.trains);
            },
          error: (error: any) => {
            console.error('Error:', error);
          }
        }
      );

  }

  onBookNow(trainId: number) {
    // Do something with the trainId, such as navigating to a booking page
    console.log('Book now clicked for train with id:', trainId);
    // Example: Navigate to a booking page with the trainId
    this.router.navigate(['/slotbook', trainId]);
  }
}