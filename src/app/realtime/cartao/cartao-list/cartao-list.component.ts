import { Component, OnInit } from '@angular/core';
import { CartaoService } from '@services/cartao/cartao.service';
 import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Cartao } from 'src/app/interfaces/cartao';

@Component({
  selector: 'app-cartao-list',
  templateUrl: './cartao-list.component.html',
  styleUrls: ['./cartao-list.component.scss']
})
export class CartaoListComponent implements OnInit {
  cartoes: Observable<Cartao[]>;
  pesquisa = {} as any;

  constructor(public cartaoService: CartaoService, private snackBar: MatSnackBar) {
    this.listar();
  }

  listar() {
    this.cartoes = this.cartaoService.realtime.list();
  }

  deletar(id: string) {
    this.cartaoService.realtime.remove(id).then(() => {
      this.snackBar.open('cartão removido', '', {
        duration: 3000
      });
      this.cartaoService.cartao = {} as Cartao;
    });
  }

  atualizar(cartao: Cartao) {
    this.cartaoService.cartao = cartao;
    this.cartaoService.cartaoBefore = JSON.parse(JSON.stringify(cartao));
  }

  pesquisarBandeiraPais() {
    this.cartoes = this.cartaoService.realtime.getBandeiraPaises(this.pesquisa.bandeira, this.pesquisa.pais);
  }

  pesquisarNome() {
    this.cartoes = this.cartaoService.realtime.findNome(this.pesquisa.nome);
  }
  pesquisarBandeiraPaisNome() {
    this.cartoes = this.cartaoService.realtime.getBandeiraPaisesPeloNome(
      this.pesquisa.bandeira,
      this.pesquisa.pais,
      this.pesquisa.nome
    );
  }
  verificaId(id: string) {
    return this.cartaoService.cartaoBefore.id === id;
  }

  verificaCampo(id: string, valor: string, campo: string) {
    const valorBefore = this.cartaoService.cartaoBefore[campo];
    return this.verificaId(id) && valorBefore !== valor ? 'field-update' : '';
  }

  limparObjetoPesquisa() {
    this.pesquisa = {} as any;
  }

  ngOnInit() {}
}
