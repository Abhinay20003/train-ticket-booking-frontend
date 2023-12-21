import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Register } from 'src/app/models/register';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  public user: Register = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };

  errorMessage: string = '';
  

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.user = form.value;
      this.auth.register(this.user).subscribe({
        next: (data) => {
          // alert('Registration successful!');
          console.log(data);
          this.router.navigateByUrl('/login');
        },
        error: (error) => {
          console.log('Error:', error);
          // alert('Registration unsuccessful!');
          this.errorMessage = 'Registration unsuccessful!';
        }
      });
    }
  }
}
