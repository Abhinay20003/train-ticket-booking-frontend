import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';


interface Card {
  name: string;
  age: string;
  phone: string;
  gender: string;
}
@Component({
  selector: 'app-slotbook',
  templateUrl: './slotbook.component.html',
  styleUrls: ['./slotbook.component.css']
})
export class SlotbookComponent implements OnInit{
  //constructor( private router: Router) {}
constructor(private slotbookService: BookService,private router: Router) {}
  ngOnInit(): void {}
  selectedNumber: number = 0;
  cards: Card[] = [];

// usage of dynamically cards
  onNumberChange() {
    if (this.isInvalidNumber()) {
      
      this.selectedNumber = 1;
    }
    this.cards = this.isInvalidNumber() ? [] : Array.from({ length: this.selectedNumber }, () => ({ name: '', age: '', phone: '' ,gender: ''}));
  }

//validating the phone numbers
  validatePhone(card: Card) {
    card.phone = card.phone.replace(/[^0-9]/g, '');
  }
  isPhoneValid(card: Card): boolean {
    return /^[6-9]\d{9}$/.test(card.phone);
  }

  isNameValid(card: Card): boolean {
    return /^[a-zA-Z]+$/.test(card.name);
  }

  isInvalidNumber(): boolean {
    // Check if the selected number is less than 1 or greater than 6
    return this.selectedNumber < 1 || this.selectedNumber > 6;
  }

// submiting card should not be empty
submitForm() {
    // if (this.isCardDataEmpty(card)|| !this.isPhoneValid(card)||!this.isNameValid(card)|| !card.gender) {
    //   console.error('Error: Empty or invalid data. Submission aborted.');
    //   alert("Fill The Empty fields");
    //   return;
    // }
    if (this.isCardDataEmpty() || this.cards.some((card) => !this.isPhoneValid(card) || !this.isNameValid(card) || !card.gender)) {
      console.error('Error: Empty or invalid data. Submission aborted.');
      alert('Fill The Empty fields or correct the invalid data');
      return;
    }
    // console.log('Submitted Card:', card);
    // this.dataService.getCardData$().subscribe((currentCardData) => {
     
    //   this.dataService.updateCardData([...currentCardData, card]);});
    //this.dataService.updateCardData(card);
    this.slotbookService.updateCardData(this.cards);
    this.router.navigateByUrl('/submitdet');

  }
  // isCardDataEmpty(card: Card): boolean {
  //   return !card.name || !card.age || !card.phone;
  // }
  isCardDataEmpty(): boolean {
    return this.cards.some((card) => !card.name || !card.age || !card.phone);
  }

}
