import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

const routes: Routes = [
  {path: "photos", component: PhotoListComponent},
  {path: "photo-details", component: PhotoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoRoutingModule { }
