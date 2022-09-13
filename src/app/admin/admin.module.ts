import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarifComponent } from './tarif/tarif.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AlayoutComponent } from './alayout/alayout.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TarifComponent,
    AlayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
