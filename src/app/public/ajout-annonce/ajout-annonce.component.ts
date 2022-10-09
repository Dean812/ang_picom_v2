import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PublicService } from 'src/app/_services/public.service';

@Component({
  selector: 'app-ajout-annonce',
  templateUrl: './ajout-annonce.component.html',
  styleUrls: ['./ajout-annonce.component.css']
})
export class AjoutAnnonceComponent implements OnInit {

  zones: Zone[] = [];




  constructor(
    private publicService: PublicService,
    public formBuilder: FormBuilder) { }

  loadZones() {
    this.publicService.getZones().subscribe((data: Zone[]) => {
      console.log(data);
      this.zones = data;
    });
  }

  ngOnInit(): void {

    // chargement de data via bdd
    this.loadZones();
  }

}
