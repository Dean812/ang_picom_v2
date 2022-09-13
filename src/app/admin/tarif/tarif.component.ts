import { Component, OnInit } from '@angular/core';
import { Tarif } from 'src/app/_model/tarif';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrls: ['./tarif.component.css']
})
export class TarifComponent implements OnInit {

  tarifs: Tarif[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getTarif().subscribe((data: Tarif[]) => {
    console.log(data);
    this.tarifs = data;
  });
  }

}
