import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submitdet',
  templateUrl: './submitdet.component.html',
  styleUrls: ['./submitdet.component.css']
})

export class SubmitdetComponent implements OnInit{
 // myText!:string;
//  startDate:string;
//  source:string;
//  destination:string;
constructor(private dataService:BookService, private router:Router){};
cardData: any[] = [];
selectedInfo: any = {};

ngOnInit(): void {
  // this.data.mydata.subscribe((res)=>{
  //   this.myText=res;
  // })
  // this.dataService.getCardData$().subscribe((data) => {
  //   this.cardData = data;
  // });

  this.dataService.getCardData$().subscribe((data) => {
    this.cardData = data;
  });

  this.dataService.selectedInfo$.subscribe((info) => {
    this.selectedInfo = info;
  });
}
navigateToPayment() {
  
  this.router.navigate(['/payment']);
}
isDataAvailable(): boolean {
  // Check if there is data available
  return (
    this.selectedInfo &&
    this.selectedInfo.selectedSource &&
    this.selectedInfo.selectedDestination &&
    this.selectedInfo.selectedDate
  );
}
}
