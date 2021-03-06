import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    this.onAuthStateChanged();
  }
  modoSeguro = false;
  get authState(): Observable<firebase.User> {
    return this.angularFireAuth.authState;
  }

  private onAuthStateChanged() {
    this.angularFireAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.router.navigate(['realtime']);
      } else {
        this.router.navigate(['']);
      }
    });
  }

  signInWithGithubAuthProvider() {
    return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  signInWithGoogleAuthProvider() {
    return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  signOut() {
    return this.angularFireAuth.auth.signOut();
  }

  linkUser(path: string) {
    if (this.angularFireAuth.auth.currentUser && this.modoSeguro) {
      return `${path}/${this.angularFireAuth.auth.currentUser.uid}/`;
    } else {
      return path + '/';
    }
  }
}
