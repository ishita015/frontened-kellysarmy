import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service'

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(mod => mod.PagesModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(mod => mod.UsersModule)
  },
  {
    path: 'service-providers',
    loadChildren: () => import('./service-providers/service-providers.module').then(mod => mod.ServiceProvidersModule),
    canActivate: [AuthGuardService]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
