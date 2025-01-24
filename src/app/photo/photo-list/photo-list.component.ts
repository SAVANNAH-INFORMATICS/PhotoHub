import { Component, ElementRef, ViewChild } from '@angular/core';
import { PhotoService } from '../photo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoDetailComponent } from '../photo-detail/photo-detail.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.css'
})
export class PhotoListComponent {
  photos: any[] = [];

  displayedColumns: string[] = [
    "id",
    "albumId",
    "title",
    "url",
    "action"
  ];

  dataSource: any;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('table') table!: ElementRef;

  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.allPhotos();
  }

  //get all photos
  allPhotos() {
    this.photoService.getAllPhotos().subscribe(
      (resp: any) => {
        console.log("Photo details : ", resp);
        this.dataSource = new MatTableDataSource(resp)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  openDialog(element: any) {
    const dialogOpen = this.dialog.open(PhotoDetailComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
      width: '60%',
      data: element,
      disableClose: false

    })
  }

}

// const photoId = this.route.snapshot.paramMap.get('id');
// this.photoService.getPhotoById(photoId).subscribe((data) => {
//   this.photos = data;
// });