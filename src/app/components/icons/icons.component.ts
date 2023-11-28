import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit{

  constructor(private tokenStorageService: TokenStorageService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigateByUrl('/login');
  }

}
