import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Cartao } from '@interfaces/cartao';

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
    const pathBandeiraPais = `desnormalizacoes/bandeira_paises/${bandeira}/${pais}`.toLowerCase();
    return this.realtime.list<Cartao>(pathBandeiraPais, ref => ref.orderByChild('nome').startAt(nome)).valueChanges();
  }

  getBandeiraPaises(bandeira: string, pais: string) {
    const pathBandeiraPais = `desnormalizacoes/bandeira_paises/${bandeira}/${pais}`.toLowerCase();
    console.log(`desnormalizacoes/${bandeira}/${pais}`);
    return this.realtime.list<Cartao>(pathBandeiraPais).valueChanges();
  }

  list() {
    return this.realtime.list<Cartao>('cartoes').valueChanges();
  }
}
