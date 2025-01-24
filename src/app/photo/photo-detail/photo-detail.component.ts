import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {
  photo: any;
  updateForm: any = FormGroup

  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      id: [this.data.id, Validators.required],
      albumId: [this.data.albumId, Validators.required],
      title: [this.data.title, Validators.required],
      url: [this.data.url, Validators.required]
    })
  }

  
}
