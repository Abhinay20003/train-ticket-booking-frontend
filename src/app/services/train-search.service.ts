import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrainDetails } from '../models/train-details';
import { Observable } from 'rxjs';
import { TrainRequest } from '../models/train-request';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TrainSearchService {

  constructor(private http: HttpClient) { }

  searchTrain(train: TrainRequest): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/v1/trainDetails/searchTrains`, train, httpOptions);
  }

  getAllTrains(): Observable<TrainDetails> {
    return this.http.get<TrainDetails>(`http://localhost:8080/api/v1/trainDetails/getAllTrains`, httpOptions);
  }
}
