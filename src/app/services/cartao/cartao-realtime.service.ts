import { AuthenticationService } from '@services/authentication/authentication.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Cartao } from '@interfaces/cartao';
import { Colecao } from '@enums/colecao.enum';

@Injectable()
export class CartaoRealtimeService {
  constructor(private realtime: AngularFireDatabase, private auth: AuthenticationService) {}
  get ref(): firebase.database.Reference {
    return this.realtime.database.ref(this.auth.linkUser(Colecao.cartoes));
  }

  add(cartao: Cartao): firebase.database.ThenableReference {
    console.log('path', JSON.stringify(cartao));

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
      .list<Cartao>(this.auth.linkUser(Colecao.cartoes), ref =>
        ref.orderByChild('bandeira_pais').startAt(`${bandeira}_${pais}`)
      )
      .valueChanges();
  }

  findNome(nome: string) {
    return this.realtime
      .list<Cartao>(this.auth.linkUser(Colecao.cartoes), ref => ref.orderByChild('nome').startAt(nome))
      .valueChanges();
  }

  getBandeiraPaisesPeloNome(bandeira: string, pais: string, nome: string) {
    const pathBandeiraPais =
      this.auth.linkUser(Colecao.desnormalizacoes) + `bandeira_paises/${bandeira}/${pais}`.toLowerCase();
    return this.realtime.list<Cartao>(pathBandeiraPais, ref => ref.orderByChild('nome').startAt(nome)).valueChanges();
  }

  getBandeiraPaises(bandeira: string, pais: string) {
    const pathBandeiraPais =
      this.auth.linkUser(Colecao.desnormalizacoes) + `bandeira_paises/${bandeira}/${pais}`.toLowerCase();
    console.log(pathBandeiraPais);
    return this.realtime.list<Cartao>(pathBandeiraPais).valueChanges();
  }

  list() {
    console.log(this.auth.linkUser('cartoes'));

      return this.realtime.list<Cartao>(this.auth.linkUser('cartoes')).valueChanges();

  }
}
