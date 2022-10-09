import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Annonce } from '../_model/annonce';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  url = "http://localhost:8080/api";

  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
      'access-control-allow-origin': '*'
    })
  }

  constructor(private http: HttpClient) { }
  //Dans page "annonces"
  getAnnonces(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.url + '/annonces/ensembleAnnonce', this.httpOptions)
  }

  //Dans page "ajout annonce"
  getZones(): Observable<Zone[]> {
    return this.http.get<Zone[]>(this.url + '/tarifs/ensembleZone', this.httpOptions)
  }
  // createAnnonce(annonce: Annonces): Observable<Annonces> {
  //   return this.http.post<Annonces>(this.url + '/clients', JSON.stringify(annonce), this.httpOptions)
  // }

}
