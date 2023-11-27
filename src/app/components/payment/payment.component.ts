import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingRequest } from 'src/app/models/booking-request';
import { Passenger } from 'src/app/models/passenger';
import { TrainDetails } from 'src/app/models/train-details';
import { BookService } from 'src/app/services/book.service';
import { BookingServiceService } from 'src/app/services/booking-service.service';
import { TrainSearchService } from 'src/app/services/train-search.service';

enum PaymentMethod {
  CreditCard = 'creditCard',
  DebitCard = 'debitCard',
  UPI = 'upi',
  Wallet = 'wallet',
  NetBanking = 'netBanking',
  COD = 'cod'
}

enum WalletType {
  Paytm = 'paytm',
  PhonePe = 'phonePe',
  GooglePay = 'googlePay',
  AmazonPay = 'amazonPay'
}

enum BankName {
  HDFC = 'HDFC Bank',
  ICICI = 'ICICI Bank',
  Axis = 'Axis Bank',
  SBI = 'SBI'
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private dataService: BookService, private trainDetails:TrainSearchService, private bookingService: BookingServiceService ,private router: Router, private route: ActivatedRoute) {}

  trainId: number;
  totalPrice: number = 0;
  cardData: any[] = [];
  public train: TrainDetails;
 
  ngOnInit(): void {
    // Subscribe to the route parameters observable
    this.route.paramMap.subscribe(params => {
      // Retrieve the trainId from the route parameters
      this.trainId = +params.get('trainId');
      this.totalPrice = +params.get('totalPrice');

      // Log to the console to confirm that you captured the trainId
      console.log('Captured trainId:', this.trainId);
      console.log('Captured totalPrice:', this.totalPrice);
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
      console.log(this.cardData);
    });
  }
  PaymentMethod = PaymentMethod;
  WalletType = WalletType;
  BankName = BankName;
  selectedPaymentMethod: PaymentMethod | undefined;
  selectedWalletType: WalletType | undefined;
  selectedBankName: BankName | undefined;
  cardNumber: number | undefined;
  expiryDate: number | undefined;
  cvv: number | undefined;
  otp: number | undefined;
  upiId: string | undefined;
  walletNumber: number | undefined;
  walletPin: number | undefined;
  otpEnabled = true;
  netBankingId: string | undefined;
  netBankingPassword: string | undefined;
  totalAmount: number;


  submitForm(paymentForm: NgForm) {
    console.log(paymentForm);
  }

  showAlert(){
    alert('Your Transaction is Successful');
  }

  confirmBooking() {

    const passengers: Passenger[] = this.cardData.map(card => {
      return {
        name: card.name,
        gender: card.gender,
        dob: card.age,
        phoneNumber: card.phone
      };
    });

    const bookingRequest: BookingRequest = {
      userEmail: window.sessionStorage.getItem('email'),
      trainId: this.trainId,
      price: this.totalPrice,
      passengers: passengers
    } 


    console.log(bookingRequest);

    this.bookingService.makeBooking(bookingRequest).subscribe(
      {
        next: (result) => {
          console.log(result);
          alert('Your booking is successfull!');
        },
        error: (error: any) => {
          console.error('Error: ', error);
        }
      }
    );
  }
}