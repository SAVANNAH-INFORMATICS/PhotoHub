import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userForm: any = FormGroup;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: [this.data.name],
      username: [this.data.username],
      phone: [this.data.phone],
      email: [this.data.email],
      website: [this.data.website],
      street: [this.data.address.street],
      city: [this.data.address.city],
      suite: [this.data.address.suite],
      zipcode: [this.data.address.zipcode],
      geo: [this.data.address.geo.lat + ',' + this.data.address.geo.lng],
      company: [this.data.company.name],
      catchPhrase: [this.data.company.catchPhrase],
      bs: [this.data.company.bs]
    })
  }
}
