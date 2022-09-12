import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./auth/auth.module')
      .then(module => module.AuthModule)
  },
  {
    path: 'public', loadChildren: () => import('./public/public.module')
      .then(module => module.PublicModule)
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module')
      .then(module => module.AdminModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
