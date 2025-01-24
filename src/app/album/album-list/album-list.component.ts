import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlbumService } from '../album.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AlbumDetailComponent } from '../album-detail/album-detail.component';

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
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.albumService.getAlbums().subscribe((data: any[]) => {
      this.albums = data;
      console.log("Album Data : ", data);
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  viewAlbum(album: any): void {
    this.router.navigate(['/album', album.id]);
  }

  openDialog(element: any) {
    const dialogOpen = this.dialog.open(AlbumDetailComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
      width: '60%',
      data: element,
      disableClose: false

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
