import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-cardbook',
  templateUrl: './cardbook.component.html',
  styleUrls: ['./cardbook.component.css']
})
// export class CardbookComponent implements OnInit{
//   text!:string;
//   constructor(private data:BookService){}
//   ngOnInit(): void {
    
//   }
//   OnClicking(){
//     console.log(this.text);
//     this.data.getdata(this.text);
//   }
// }



export class CardbookComponent implements OnInit{
  selectedSource: string;
  selectedDestination: string;
  selectedDate: string;
  destinationOptions: string[];
  ngOnInit(): void {
    
  }
  cities: string[] = ['Hyderabad', 'Delhi', 'Mumbai','Kolkata','Pune','Bangalore','Chennai','Lucknow'];
 
  showSelectedInfo: boolean = false;
  today: string; // Property to hold the current date
 

  constructor( private sharedService:BookService) {
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
        selectedSource: this.selectedSource,
        selectedDestination: this.selectedDestination,
        selectedDate: this.selectedDate,
      };
  
      this.sharedService.updateSelectedInfo(selectedInfo);
     

  }
}