import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  url = "localhost:8080/api";

  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
      'access-control-allow-origin': '*'
    })
  }

  constructor(private http: HttpClient) { }

  getAnnonces(): Observable<Annonces[]> {
    return this.http.get<Annonces[]>(this.url + '/clients', this.httpOptions)
  }

  createAnnonce(annonce: Annonces): Observable<Annonces> {
    return this.http.post<Annonces>(this.url + '/clients', JSON.stringify(annonce), this.httpOptions)
  }

}
