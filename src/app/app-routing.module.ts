import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { IconsComponent } from './components/icons/icons.component';

import { AboutComponent } from './components/about/about.component';
import { SlotbookComponent } from './components/slotbook/slotbook.component';
import { CardbookComponent } from './components/cardbook/cardbook.component';
import { SubmitdetComponent } from './components/submitdet/submitdet.component';
import { PaymentComponent } from './components/payment/payment.component';
import { TicketConfirmComponent } from './components/ticket-confirm/ticket-confirm.component';
import { MyBookingsComponent } from './components/my-bookings/my-bookings.component';
import { AlltrainsComponent } from './components/alltrains/alltrains.component';
import { AddtrainsComponent } from './components/addtrains/addtrains.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AllbookingsComponent } from './components/allbookings/allbookings.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'slotbook/:trainId', component: SlotbookComponent },
  { path: 'cardbook', component: CardbookComponent },
  { path: 'submitdet/:trainId', component: SubmitdetComponent },
  { path: 'payment/:trainId/:totalPrice', component: PaymentComponent },
  { path: 'ticket-confirm', component: TicketConfirmComponent },
  { path: 'my-bookings', component: MyBookingsComponent },
  { path: 'addtrains', component: AddtrainsComponent},
  { path: 'alltrains', component: AlltrainsComponent},
  { path: 'adminlogin', component: AdminloginComponent},
  { path: 'allbookings', component: AllbookingsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
