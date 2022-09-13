import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Tarif } from 'src/app/_model/tarif';
import { TrancheHoraire } from 'src/app/_model/trancheHoraire';
import { Zone } from 'src/app/_model/zone';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrls: ['./tarif.component.css']
})
export class TarifComponent implements OnInit {

  tarifs: Tarif[] = [];
  zones: Zone[] = [];
  tranchesHoraires: TrancheHoraire[] = [];

  @Input()
  tarif = new Tarif();

  tarifForm: FormGroup = new FormGroup(0);



  constructor(
    private adminService: AdminService,
    public formBuilder: FormBuilder) { }

  loadTarif() {
    this.adminService.getTarif().subscribe((data: Tarif[]) => {
      console.log(data);
      this.tarifs = data;
    });
  }

  ngOnInit(): void {
    // chargement de data via bdd
    this.loadTarif();

    this.adminService.getZone().subscribe((data: Zone[]) => {
      console.log(data);
      this.zones = data;
    });

    this.adminService.getTrancheHoraire().subscribe((data: TrancheHoraire[]) => {
      console.log(data);
      this.tranchesHoraires = data;
    });

    // gestion ajout d'un tarif

    this.tarifForm = this.formBuilder.group({

      prixEnEuros: new FormControl('', Validators.required),
      zone: new FormControl('', Validators.required),
      trancheHoraire: new FormControl('', Validators.required)

    })
  }

  onSubmit(): void {
    console.log(this.tarif);
    if (this.tarifForm.dirty && this.tarifForm.valid) {
      this.tarif.prixEnEuros = this.tarifForm.get('prixEnEuros')?.value;
      this.tarif.zone = this.tarifForm.get('zone')?.value;
      this.tarif.trancheHoraire = this.tarifForm.get('trancheHoraire')?.value;


      this.adminService.createTarif(this.tarif).subscribe((data: {}) => {
        this.loadTarif();
      })
    }
  }
}


