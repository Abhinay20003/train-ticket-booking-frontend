import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { IconsComponent } from './components/icons/icons.component';

import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
<<<<<<< HEAD

  { path: 'icons', component: IconsComponent},
  {path:'about',component:AboutComponent}
=======
  {path:'about',component:AboutComponent},
  { path: 'icons', component: IconsComponent}
>>>>>>> f9157de19f1af503d995914108e8c1fa314b5bee

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
