import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuardGuard } from '../auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard', canActivate:[AuthGuardGuard],
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
        data: { roles: ['dashboard_access'], preload: true}
      },
      {
        path: 'post-crud', canActivate:[AuthGuardGuard],
        loadChildren: () => import('./post-crud/post-crud.module').then((m) => m.PostCrudModule),
        data: { roles: ['post-crud_access'], preload: true}
      },
      {
        path: "**",
        redirectTo: "dashboard",
        pathMatch: "full"
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
