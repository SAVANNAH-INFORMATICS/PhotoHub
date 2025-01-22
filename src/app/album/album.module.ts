import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    AlbumListComponent,
    AlbumDetailComponent
  ],
  exports: [MaterialModule],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    MaterialModule
  ]
})
export class AlbumModule { }
