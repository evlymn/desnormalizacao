import { UsuarioRealtimeService } from './services/usuario/usuario-realtime.service';
import { AuthenticationService } from './services/authentication/authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FirebaseConfig } from '../environments/firebase.config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { RealtimeModule } from './realtime/realtime.module';
import { LogoutComponent } from './logout/logout.component';
import { UsuarioService } from './services/usuario/usuario.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [AppComponent, LoginComponent, LogoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RealtimeModule
  ],
  providers: [AuthenticationService, UsuarioRealtimeService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule {}
