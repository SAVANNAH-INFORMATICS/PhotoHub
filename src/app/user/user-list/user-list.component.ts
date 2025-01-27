import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxUiLoaderService } from 'ngx-ui-loader';





@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  displayedColumns: string[] = [
    "No",
    "name",
    "username",
    "phone",
    "website",
    "city", 'street',
    "company",
    "action"
  ];


  dataSource: any;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('table') table!: ElementRef;

  constructor(
    private userService: UserService,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
    private ngxLoader: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.ngxLoader.start();
    if (localStorage.getItem('authToken')) {
      this.userService.getUsers().subscribe((data: any[]) => {
        this.ngxLoader.stop();
        this.users = data;
        console.log("User Data : ", data);
        this.dataSource = new MatTableDataSource(data)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    } else {
      this.ngxLoader.stop();
      this.router.navigate(['authentication/login']);
      this.snackbar.open("You are not authorized to access this page.", "X", {
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        duration: 3000
      });
    }
  }


  //Open dialog here
  openDialog(element: any) {
    this.ngxLoader.start();
    const dialogOpen = this.dialog.open(UserDetailComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
      width: '60%',
      data: element,
      disableClose: false,
      position: {
        top: '5%'
      }
    });
    this.ngxLoader.stop();
  }
}
