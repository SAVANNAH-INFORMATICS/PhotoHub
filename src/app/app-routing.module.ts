import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/authentication/login', pathMatch: 'full'
  },
  {
    path: "authentication",
    // component: LoginComponent,
    loadChildren: () =>
      import("./authentication/authentication.module").then((m) => m.AuthenticationModule),
  },
  {
    path: "user",
    loadChildren: () =>
      import("./user/user.module").then((m) => m.UserModule)
  },
  {
    path: "album",
    loadChildren: () =>
      import("./album/album.module").then((m) => m.AlbumModule)
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
      import("./photo/photo.module").then((m) => m.PhotoModule)
  },
  {
    path: "shared",
    loadChildren: () =>
      import("./shared/shared.module").then((m) => m.SharedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
