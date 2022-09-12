import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutAnnonceComponent } from './ajout-annonce/ajout-annonce.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { PlayoutComponent } from './playout/playout.component';

const routes: Routes = [
  {
    path: '', component: PlayoutComponent, children: [

      { path: '', redirectTo: 'annonces', pathMatch: 'full' },
      { path: 'annonces', component: AnnoncesComponent },
      { path: 'ajoutAnnonce', component: AjoutAnnonceComponent },
      //{ path: 'annonces', component: AnnoncesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
