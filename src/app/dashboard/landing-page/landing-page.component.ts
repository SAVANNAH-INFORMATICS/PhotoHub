import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {


  constructor(
    private router: Router,

  ) { }

  ngOnInit(): void {

  }

  openLogin() {

    this.router.navigateByUrl('../authentication/login')
  }
}
