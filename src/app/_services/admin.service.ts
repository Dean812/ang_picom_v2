import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarif } from '../_model/tarif';

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

  // updateTarif(id: any, tarif: Tarif): Observable<Tarif> {
  //   return this.http.put<Tarif>(this.url + '/clients/', JSON.stringify(tarif), this.httpOptions)
  // }

  // createTarif(tarif: Tarif): Observable<Tarif> {
  //   return this.http.post<Tarif>(this.url + '/clients', JSON.stringify(tarif), this.httpOptions)
  // }

  // deleteClient(id: any) {
  //   return this.http.delete<Tarif>(this.url + '/clients/' + id, this.httpOptions)
  // }
}
