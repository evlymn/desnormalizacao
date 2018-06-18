import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@services/authentication/authentication.service';
import { Provedor } from '../enums/provedor.enum';
import { UsuarioService } from '../services/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthenticationService, private usuario: UsuarioService) {}

  provedor = Provedor;

  login(provedor: Provedor) {
    if (provedor === Provedor.github) {
      this.auth
        .signInWithGithubAuthProvider()
        .then(userGithub => {
          this.salvarUsuario(userGithub, provedor);
        })
        .catch(err => console.log(err));
    } else {
      this.auth
        .signInWithGoogleAuthProvider()
        .then(userGoogle => {
          this.salvarUsuario(userGoogle, provedor);
        })
        .catch(err => console.log(err));
    }
  }

  salvarUsuario(userProvider: any, provedor: Provedor) {
    this.usuario.realtime.salvarUsuario(userProvider.user.uid, userProvider.additionalUserInfo.profile, provedor);
  }

  ngOnInit() {}
}
