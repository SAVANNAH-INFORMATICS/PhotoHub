import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingPageComponent } from './dashboard/landing-page/landing-page.component';
import { LoginComponent } from './authentication/login/login.component';
import { authGuard } from './Services/auth.guard';

const routes: Routes = [
  {
    path: '', redirectTo: '/dashboard/main', pathMatch: 'full'
  },
    {
    path: "authentication",
   // component: LoginComponent,
    loadChildren: () =>
      import("./authentication/authentication.module").then((m) => m.AuthenticationModule),
    canActivate: [authGuard],
  
  },
  {
    path: "users",
    loadChildren: () =>
      import("./user/user.module").then((m) => m.UserModule),
    canActivate: [authGuard],
  },
  {
    path: "albums",
    loadChildren: () =>
      import("./album/album.module").then((m) => m.AlbumModule),
    canActivate: [authGuard],
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((m) => m.DashboardModule)
  },
  {
    path: "core",
    loadChildren: () =>
      import("./core/core.module").then((m) => m.CoreModule)
  },
  {
    path: "photo",
    loadChildren: () =>
      import("./photo/photo.module").then((m) => m.PhotoModule),
    canActivate: [authGuard],
  },
  {
    path: "shared",
    loadChildren: () =>
      import("./shared/shared.module").then((m) => m.SharedModule)
  },
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

