import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@services/authentication/authentication.service';
import { Provedor } from '../enums/provedor.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthenticationService) {}

  provedor  = Provedor;

  login(provedor: Provedor) {
    if (provedor === Provedor.github) {
      this.auth.signInWithGithubAuthProvider();
    } else {
      this.auth.signInWithGoogleAuthProvider();
    }
  }

  ngOnInit() {}
}
