import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LoaderComponent } from './loader/loader.component';
import { ErrorComponent } from './error/error.component';
import { PrivacyComponent } from './privacy/privacy.component';


@NgModule({
  declarations: [
    LoaderComponent,
    ErrorComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
