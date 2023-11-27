import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainSearchService } from 'src/app/services/train-search.service';
import { TrainDetails } from 'src/app/models/train-details';

@Component({
  selector: 'app-submitdet',
  templateUrl: './submitdet.component.html',
  styleUrls: ['./submitdet.component.css']
})

export class SubmitdetComponent implements OnInit {
  trainId: number;
  constructor(private dataService: BookService, private trainDetails:TrainSearchService ,private router: Router, private route: ActivatedRoute) { }

  cardData: any[] = [];
  selectedInfo: any = {};
  public train: TrainDetails;

  ngOnInit(): void {

    // Subscribe to the route parameters observable
    this.route.paramMap.subscribe(params => {
      // Retrieve the trainId from the route parameters
      this.trainId = +params.get('trainId');

      // Log to the console to confirm that you captured the trainId
      console.log('Captured trainId:', this.trainId);
    });

    this.trainDetails.getTrainById(this.trainId).subscribe(
      {
        next: (result) => {
            this.train = result;
            console.log("Succesfull!")
            console.log(this.train);
          },
        error: (error: any) => {
          console.error('Error:', error);
        }
      }
    );

    this.dataService.getCardData$().subscribe((data) => {
      this.cardData = data;
    });

  }

  navigateToPayment() {
    this.router.navigate(['/payment', this.trainId]);
  }

}
