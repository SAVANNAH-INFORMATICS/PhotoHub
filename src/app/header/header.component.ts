import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CinfirmationComponent } from '../authentication/cinfirmation/cinfirmation.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private ngxLoader: NgxUiLoaderService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {

  }

  isAuthenticated() {
    return localStorage.getItem('authToken');
  }

  //logout user
  logout() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      message: 'Logout ?'
    };
    const dialogRef = this.dialog.open(CinfirmationComponent, dialogConfig);
    const response = dialogRef.componentInstance.onEmitStatusCahnge.subscribe((response: any)=>{
      dialogRef.close();
      this.ngxLoader.stop();
      localStorage.clear();
      this.router.navigate(['dashboard/main']);
    })
   
  }
}
