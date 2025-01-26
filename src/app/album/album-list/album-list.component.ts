import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlbumService } from '../album.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AlbumDetailComponent } from '../album-detail/album-detail.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums: any[] = [];

  displayedColumns: string[] = [
    "id",
    "userId",
    "title",
    "action"
  ];


  dataSource: any;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('table') table!: ElementRef;

  constructor(
    private albumService: AlbumService,
    private router: Router,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    if (localStorage.getItem('authToken')) {
      this.albumService.getAlbums().subscribe((data: any[]) => {
        this.albums = data;
        console.log("Album Data : ", data);
        this.dataSource = new MatTableDataSource(data)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    } else {
      this.router.navigate(['authentication/login']);
      this.snackbar.open("You are not authorized to access this page.", "X", {
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        duration: 3000
      });
    }
  }

  openDialog(element: any) {
    const dialogOpen = this.dialog.open(AlbumDetailComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
      width: '60%',
      data: element,
      disableClose: false,
      position: {
        top: '5%'
      }

    })
  }

}
