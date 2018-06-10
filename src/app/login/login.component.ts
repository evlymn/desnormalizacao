import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthenticationService) {}

  login(provider: string) {
    if (provider === 'github') {
      this.auth.signInWithGithubAuthProvider();
    } else {
      this.auth.signInWithGoogleAuthProvider();
    }
  }

  ngOnInit() {}
}
