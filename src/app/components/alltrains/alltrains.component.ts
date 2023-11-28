import { Component, OnInit } from '@angular/core';
import { TrainSearchService } from 'src/app/services/train-search.service';

@Component({
  selector: 'app-alltrains',
  templateUrl: './alltrains.component.html',
  styleUrls: ['./alltrains.component.css']
})
export class AlltrainsComponent implements OnInit{

  public trains;

  constructor(private trainService:TrainSearchService) {}

  ngOnInit(): void {
    this.getAllTrains();
  }

  getAllTrains() {
    this.trainService.getAllTrains().subscribe(
      {
        next: (result) => {
          this.trains = result;
        }
      } 
    )
  }
}
