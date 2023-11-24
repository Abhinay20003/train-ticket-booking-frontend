import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-confirm',
  templateUrl: './ticket-confirm.component.html',
  styleUrls: ['./ticket-confirm.component.css']
})
export class TicketConfirmComponent implements OnInit {
  transactionId!: string; 
  showPrompt: boolean = false;
  feedbackRating: number = 3;
  bookingId!: number;

  ngOnInit(): void {
    this.bookingId = Math.floor(Math.random() * 1000000) + 1; // Generate a random order ID
    this.transactionId = 'TRX' + Math.floor(Math.random() * 1000000) + 1; // Generate a random transaction ID
  }
  showFeedbackPrompt(): void {
    this.showPrompt = true;
  }

  submitFeedback(): void {
    this.showPrompt = false;
  }



}