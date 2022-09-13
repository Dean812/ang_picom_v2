import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarif } from '../_model/tarif';
import { TrancheHoraire } from '../_model/trancheHoraire';
import { Zone } from '../_model/zone';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = "http://localhost:8080/api";

  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
      'access-control-allow-origin': '*'
    })
  }

  constructor(private http: HttpClient) { }

  getTarif(): Observable<Tarif[]> {
    return this.http.get<Tarif[]>(this.url + '/tarifs/ensembleTarif', this.httpOptions)
  }

  getZone(): Observable<Zone[]> {
    return this.http.get<Zone[]>(this.url + '/tarifs/ensembleZone', this.httpOptions)
  }

  getTrancheHoraire(): Observable<TrancheHoraire[]> {
    return this.http.get<TrancheHoraire[]>(this.url + '/tarifs/ensembleTrancheHoraire', this.httpOptions)
  }


  createTarif(tarif: Tarif): Observable<Tarif> {
    return this.http.post<Tarif>(this.url + '/tarifs/ajoutTarif', tarif, this.httpOptions)
  }


}
