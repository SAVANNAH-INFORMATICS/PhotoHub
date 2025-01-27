import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
   constructor(private router: Router,
    private ngxLoader: NgxUiLoaderService
   ) {} 

  goBack() {
this.ngxLoader.start();
    this.router.navigate(['/authentication/login']);
    this.ngxLoader.stop();
  }
}
