import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


interface Card {
  name: string;
  age: string;
  phone: string;
  gender: string;
}
@Injectable({
  providedIn: 'root'
})

export class BookService {
// mydata=new EventEmitter<any>();
//   constructor() { }
//   getdata(data:any){
//     //this.mydata.emit(data);
//     this.mydata.emit(data);
//   }




// private cardDataSubject = new BehaviorSubject<any[]>([]);

// getCardData$(): Observable<any[]> {
//   return this.cardDataSubject.asObservable();
// }

// updateCardData(newData: any[]) {
//   if (!this.areArraysEqual(this.cardDataSubject.value, newData)) {
//     this.cardDataSubject.next(newData);
//   }
// }
// private areArraysEqual(arr1: any[], arr2: any[]): boolean {

//   return JSON.stringify(arr1) === JSON.stringify(arr2);
// }

// private cardDataSubject = new BehaviorSubject<Card[]>([]);
//   cardData$ = this.cardDataSubject.asObservable();

//   updateCardData(card: Card): void {
//     const currentCardData = this.cardDataSubject.value;
//     this.cardDataSubject.next([...currentCardData, card]);
//   }
private cardDataSubject = new BehaviorSubject<Card[]>([]);

getCardData$(): Observable<Card[]> {
  return this.cardDataSubject.asObservable();
}

updateCardData(data: Card[]) {
  this.cardDataSubject.next(data);
}


private selectedInfoSubject = new BehaviorSubject<any>({});
  selectedInfo$: Observable<any> = this.selectedInfoSubject.asObservable();

  updateSelectedInfo(selectedInfo: any) {
    this.selectedInfoSubject.next(selectedInfo);
  }
}
