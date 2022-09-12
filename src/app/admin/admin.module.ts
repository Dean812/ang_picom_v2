import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarifComponent } from './tarif/tarif.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AlayoutComponent } from './alayout/alayout.component';

@NgModule({
  declarations: [
    TarifComponent,
    AlayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
