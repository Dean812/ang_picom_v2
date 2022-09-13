import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/_model/client';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  utilisateur = new Client();

  authForm: FormGroup = new FormGroup(0);

  constructor(
    private authService: AuthService,
    public router: Router,
    public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  onSubmit(): void {
    console.log(AuthService.isLogged.value);
    if (this.authForm.dirty && this.authForm.valid) {
      this.utilisateur.email = this.authForm.get('email')?.value;
      this.utilisateur.motDePasse = this.authForm.get('password')?.value;
      this.authService.getUtilisateur(this.utilisateur).subscribe((data: {}) => {
        console.log(this.utilisateur.numeroDeTelephone + "  login.component.ts checking to finish");
        console.log(data)
        AuthService.isLogged.next(true);
        this.router.navigate(['/admin']);

      });
    } else {
      console.error("Une erreur est survenue")
    }

  }
}

