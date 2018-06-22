import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Cartao } from '../../interfaces/cartao';
import * as firebase from 'firebase/app';

@Injectable()
export class CartaoRealtimeService {
  constructor(private realtime: AngularFireDatabase) {}
  get ref(): firebase.database.Reference {
    return this.realtime.database.ref('cartoes');
  }

  add(cartao: Cartao): firebase.database.ThenableReference {
    return this.ref.push(cartao);
  }

  update(cartao: Cartao): Promise<Cartao> {
    return this.ref.child(cartao.id).update(cartao);
  }

  remove(id: string): Promise<Cartao> {
    return this.ref.child(id).remove();
  }

  find(bandeira: string, pais: string) {
    return this.realtime
      .list<Cartao>('cartoes', ref => ref.orderByChild('bandeira_pais').startAt(`${bandeira}_${pais}`))
      .valueChanges();
  }

  findNome(nome: string) {
    return this.realtime.list<Cartao>('/cartoes', ref => ref.orderByChild('nome').startAt(nome)).valueChanges();
  }

  getBandeiraPaisesPeloNome(bandeira: string, pais: string, nome: string) {
    return this.realtime
      .list<Cartao>(`desnormalizacoes/bandeira_paises/${bandeira}/${pais}`, ref =>
        ref.orderByChild('nome').startAt(nome)
      )
      .valueChanges();
  }

  getBandeiraPaises(bandeira: string, pais: string) {
    console.log(`desnormalizacoes/${bandeira}/${pais}`);
    return this.realtime.list<Cartao>(`desnormalizacoes/bandeira_paises/${bandeira}/${pais}`).valueChanges();
  }

  list() {
    return this.realtime.list<Cartao>('cartoes').valueChanges();
  }
}
