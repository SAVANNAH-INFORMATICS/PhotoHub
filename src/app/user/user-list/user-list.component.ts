import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { MatDialog } from '@angular/material/dialog';





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

    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((data: any[]) => {
      this.users = data;
      console.log("User Data : ", data);
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  viewUserDetails(user: any): void {
    this.router.navigate(['/users/user-details', user.id]);
  }

  openDialog(element: any) {
    const dialogOpen = this.dialog.open(UserDetailComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
      width: '60%',
      data: element,
      disableClose: true // Prevents closing on clicking outside

    })

    dialogOpen.afterClosed().subscribe(
      //  (val:any)=>{
      //    if(val){
      //      this.getAllBusinessAccounts()
      //    }

      //  }
    )

  }

}
