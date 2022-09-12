import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/_model/client';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  @Input()
  utilisateur = new Client();

  authForm: FormGroup = new FormGroup(0);

  constructor(
    public authService: AuthService,
    public router: Router,
    public formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required)

    })
  }

  ajoutUtilisateur() {
    if (this.authForm.dirty && this.authForm.valid) {
      this.utilisateur.nom = this.authForm.get('nom')?.value;
      this.utilisateur.prenom = this.authForm.get('prenom')?.value;
      this.utilisateur.email = this.authForm.get('email')?.value;
      this.utilisateur.motDePasse = this.authForm.get('password')?.value;
      this.utilisateur.numeroDeTelephone = this.authForm.get('telephone')?.value;
      this.authService.createUtilisateur(this.utilisateur).subscribe((data: {}) => {
        this.router.navigate(['/login']);
      });
    } else {
      console.error("Une erreur est survenue")
    }
  }



}
