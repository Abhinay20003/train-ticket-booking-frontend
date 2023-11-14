import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { Register } from '../models/register';

const baseURL = 'http://localhost:8080/api/v1/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: Login): Observable<any> {
    return this.http.post(baseURL + 'authenticate', user, httpOptions);
  }

  register(user: Register): Observable<any> {
    return this.http.post(baseURL + 'register', user, httpOptions);
  }
}
