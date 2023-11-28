import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { ServicesComponent } from './components/services/services.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { IconsComponent } from './components/icons/icons.component';
import { AboutComponent } from './components/about/about.component';
import { CardbookComponent } from './components/cardbook/cardbook.component';
import { SlotbookComponent } from './components/slotbook/slotbook.component';
import { SubmitdetComponent } from './components/submitdet/submitdet.component';
import { PaymentComponent } from './components/payment/payment.component';
import { TicketConfirmComponent } from './components/ticket-confirm/ticket-confirm.component';
import { MyBookingsComponent } from './components/my-bookings/my-bookings.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AddtrainsComponent } from './components/addtrains/addtrains.component';
import { AlltrainsComponent } from './components/alltrains/alltrains.component';
import { AllbookingsComponent } from './components/allbookings/allbookings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    IconsComponent,
    CardbookComponent,
    SlotbookComponent,
    SubmitdetComponent,
    PaymentComponent,
    TicketConfirmComponent,
    MyBookingsComponent,
    AdminloginComponent,
    AddtrainsComponent,
    AlltrainsComponent,
    AllbookingsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
