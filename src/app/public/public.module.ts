import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnoncesComponent } from './annonces/annonces.component';
import { PublicRoutingModule } from './public-routing.module';
import { PlayoutComponent } from './playout/playout.component';
import { AjoutAnnonceComponent } from './ajout-annonce/ajout-annonce.component';

@NgModule({
  declarations: [
    AnnoncesComponent,
    PlayoutComponent,
    AjoutAnnonceComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
