import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Utilisateur } from '../_model/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost:8080/api";

  static isLogged = new BehaviorSubject<boolean>(false);

  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
      'access-control-allow-origin': '*'
    })
  }

  constructor(private http: HttpClient) { }

  createUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.url + '/utilisateurs/clientDto', utilisateur, this.httpOptions);
  }

  getUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.url + '/utilisateurs/authUtilisateur', utilisateur, this.httpOptions);
  }




}
