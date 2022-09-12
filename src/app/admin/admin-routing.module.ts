import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlayoutComponent } from './alayout/alayout.component';
import { TarifComponent } from './tarif/tarif.component';

const routes: Routes = [
  {
    path: '', component: AlayoutComponent, children: [
      { path: '', redirectTo: 'tarif', pathMatch: 'full' },
      { path: 'tarif', component: TarifComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
