import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

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

  constructor(private tokenStorageService: TokenStorageService, private router: Router) {}

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

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigateByUrl('/login');
  }

}