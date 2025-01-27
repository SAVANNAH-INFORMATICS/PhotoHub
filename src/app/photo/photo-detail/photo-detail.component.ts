import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxUiLoaderService } from 'ngx-ui-loader';

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
    private formBuilder: FormBuilder,
    private service: PhotoService,
    private snackbar: MatSnackBar,
    private dialogRef: MatDialogRef<PhotoDetailComponent>,
    private ngxLoader: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      id: [this.data.id, Validators.required],
      albumId: [this.data.albumId, Validators.required],
      title: [this.data.title, Validators.required],
      url: [this.data.url, Validators.required],
      thumbnailUrl: [this.data.thumbnailUrl, Validators.required]
    });
  }
  //update photo details here
  updatePhoto() {
    this.ngxLoader.start();
    let updateData = this.updateForm.value;
    delete updateData.id;

    let photoId = this.data.id;

    console.log(updateData, photoId);
    this.service.updatePhotodetails(updateData, photoId).subscribe(
      (resp: any) => {
        console.log(resp);
        this.dialogRef.close();
        if (resp.title === updateData.title) {
          this.ngxLoader.stop();
          this.snackbar.open("Photo details updated Successfully", "X", {
            verticalPosition: 'bottom',
            horizontalPosition: 'center',
            duration: 3000
          });
        } else {
          this.ngxLoader.stop();
          this.snackbar.open("Error Occured, Try again.", "X", {
            verticalPosition: 'bottom',
            horizontalPosition: 'center',
            duration: 3000
          })
        }
      },
      (error: any) => {
        this.ngxLoader.stop();
        console.log(error);
        this.snackbar.open("They system is busy, try later.", "X", {
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
          duration: 3000
        })
      }
    );
  }
}
