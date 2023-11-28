import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';


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
export class SlotbookComponent implements OnInit {
  trainId: number;
  //constructor( private router: Router) {}
  constructor(private slotbookService: BookService, private router: Router, private route: ActivatedRoute, private tokenStorageService: TokenStorageService) { }
  ngOnInit(): void {
    // Subscribe to the route parameters observable
    this.route.paramMap.subscribe(params => {
      // Retrieve the trainId from the route parameters
      this.trainId = +params.get('trainId');

      // Log to the console to confirm that you captured the trainId
      console.log('Captured trainId:', this.trainId);
    });
  }
  selectedNumber: number = 0;
  cards: Card[] = [];

  // usage of dynamically cards
  onNumberChange() {
    if (this.isInvalidNumber()) {

      this.selectedNumber = 1;
    }
    this.cards = this.isInvalidNumber() ? [] : Array.from({ length: this.selectedNumber }, () => ({ name: '', age: '', phone: '', gender: '' }));
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
    
    if (this.isCardDataEmpty() || this.cards.some((card) => !this.isPhoneValid(card) || !this.isNameValid(card) || !card.gender)) {
      console.error('Error: Empty or invalid data. Submission aborted.');
      alert('Fill The Empty fields or correct the invalid data');
      return;
    }
  
    this.slotbookService.updateCardData(this.cards);
    this.router.navigate(['/submitdet', this.trainId]);

  }
  
  isCardDataEmpty(): boolean {
    return this.cards.some((card) => !card.name || !card.age || !card.phone);
  }

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigateByUrl('/login');
  }

}
