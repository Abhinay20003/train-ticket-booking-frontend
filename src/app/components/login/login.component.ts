import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private auth: AuthService, private tokenStorage: TokenStorageService, private router: Router) {}

  ngOnInit(): void {}

  user: Login = new Login();
  
  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      this.user = loginForm.value;
      this.auth.login(this.user).subscribe({
        next: (data) => {
          this.tokenStorage.saveUser(data);
          alert('Login successful!');
          this.router.navigateByUrl('/icons');
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
