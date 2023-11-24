import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-submitdet',
  templateUrl: './submitdet.component.html',
  styleUrls: ['./submitdet.component.css']
})

export class SubmitdetComponent implements OnInit {
  // myText!:string;
  //  startDate:string;
  //  source:string;
  //  destination:string;
  trainId: number;
  constructor(private dataService: BookService, private router: Router, private route: ActivatedRoute) { }

  cardData: any[] = [];
  selectedInfo: any = {};

  ngOnInit(): void {

    // Subscribe to the route parameters observable
    this.route.paramMap.subscribe(params => {
      // Retrieve the trainId from the route parameters
      this.trainId = +params.get('trainId');

      // Log to the console to confirm that you captured the trainId
      console.log('Captured trainId:', this.trainId);
    });

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
