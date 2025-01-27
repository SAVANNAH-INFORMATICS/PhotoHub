import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ErrorComponent } from './error/error.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ErrorComponent,
    PrivacyComponent,

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
  ]
})
export class SharedModule { }
