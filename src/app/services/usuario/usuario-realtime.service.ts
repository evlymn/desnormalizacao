import { Colecao } from './../../enums/colecao.enum';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Provedor } from './../../enums/provedor.enum';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRealtimeService {
  constructor(private db: AngularFireDatabase) {}

  public salvarUsuario(uid: string, profile: any, provedor: Provedor) {
    const userRef = `${Colecao.usuarios}/${uid}`;
    return this.db.database.ref(userRef).set({ provedor: provedor, profile: profile });
  }
}
