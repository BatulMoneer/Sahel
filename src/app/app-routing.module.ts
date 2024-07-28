import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-apps/layout/main-layout/main-layout.component';
import { CheckTokenGuard } from './guard/check-token.guard';
import { AuthCheckGuard } from './guard/auth-check.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth', canActivate: [CheckTokenGuard],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'apps', canActivate: [AuthCheckGuard],
    component: MainLayoutComponent,
    loadChildren: () => import('./main-apps/main-apps.module').then(m => m.MainAppsModule)
  },
  { //must be at last, for an unexsisting page
    path: '**',
    redirectTo: '/auth/notFound' // or design a page for it 404
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
