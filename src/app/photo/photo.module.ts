import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';


@NgModule({
  declarations: [
    PhotoDetailComponent
  ],
  imports: [
    CommonModule,
    PhotoRoutingModule
  ]
})
export class PhotoModule { }
