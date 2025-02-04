import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from '../material/material.module';
import { CinfirmationComponent } from './cinfirmation/cinfirmation.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    CinfirmationComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class AuthenticationModule { }
