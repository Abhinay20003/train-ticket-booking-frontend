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


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'icons', component: IconsComponent},
  { path: 'about', component:AboutComponent},
  { path: 'slotbook/:trainId', component:SlotbookComponent},
  { path: 'cardbook', component:CardbookComponent},
  { path: 'submitdet/:trainId', component:SubmitdetComponent},
  { path: 'payment/:trainId', component:PaymentComponent},
  { path: 'ticket-confirm', component: TicketConfirmComponent},
  {path:'mybookings',component:MyBookingsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
