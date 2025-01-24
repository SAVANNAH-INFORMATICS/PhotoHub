import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { MaterialModule } from '../material/material.module';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    PhotoDetailComponent,
    PhotoListComponent
  ],
  imports: [
    CommonModule,
    PhotoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  
  ]
})
export class PhotoModule { }
