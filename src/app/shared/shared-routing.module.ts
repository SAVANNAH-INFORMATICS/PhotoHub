import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  {path: "error", component: ErrorComponent},
  {path: "privacy", component: PrivacyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
