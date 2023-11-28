import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit{
  constructor(private fb: FormBuilder, private auth: AuthService, private tokenStorage: TokenStorageService, private router: Router) {}

  ngOnInit(): void {}

  user: Login = new Login();
  
  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      this.user = loginForm.value;
      this.auth.login(this.user).subscribe({
        next: (data) => {
          this.tokenStorage.saveUser(data);
          window.sessionStorage.setItem('email', this.user.email);
          alert('Login successful!');
          this.router.navigateByUrl('/alltrains');
          console.log(data);
        },
        error: (error) => {
          console.log('Error:', error);
          alert('Login unsuccessful!');
        }
      });
    }
  }
}
