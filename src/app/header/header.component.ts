import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor(
    private router: Router,
    private ngxLoader: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
      
  }
   
  isAuthenticated() {
    return localStorage.getItem('authToken');
  }

  //logout user
  logout() {
this.ngxLoader.start();
    localStorage.clear();
    this.router.navigate(['dashboard/main']);
    this.ngxLoader.stop();
  }
}
