import { Component, Input, OnInit } from '@angular/core';
import { Annonce } from 'src/app/_model/annonce';
import { PublicService } from 'src/app/_services/public.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {

annonces: Annonce[] = [];

  constructor(private publicService: PublicService) { }

  ngOnInit(): void {
    this.publicService.getAnnonces().subscribe((data: Annonce[]) => {
      console.log(data);
      this.annonces = data;
    });
  }

}
