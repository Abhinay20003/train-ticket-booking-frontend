import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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
export class PaymentComponent {

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

  showAlert() {
    alert('Your Transaction is Successful');

  }
}