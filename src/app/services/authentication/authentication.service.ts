import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private angularFireAuth: AngularFireAuth) {}

  signInWithGithubAuthProvider() {
    return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  signInWithGoogleAuthProvider() {
    return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
