import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(userId).subscribe((data) => {
      this.user = data;
    });
  }
}
