import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartaoService } from '@services/cartao/cartao.service';
import { Cartao } from 'src/app/interfaces/cartao';

@Component({
  selector: 'app-cartao-form',
  templateUrl: './cartao-form.component.html',
  styleUrls: ['./cartao-form.component.scss']
})
export class CartaoFormComponent implements OnInit {
  constructor(public cartaoService: CartaoService, private snackBar: MatSnackBar) {}

  gravarCartao() {
    console.log(this.cartaoService.cartao.id);
    if (this.cartaoService.cartao.id) {
      this.cartaoService.realtime.update(this.cartaoService.cartao).then(() => {
        this.snackBar.open('cartão atualizado', '', {
          duration: 3000
        });
        this.limparCartao();
      });
    } else {
      this.cartaoService.realtime.add(this.cartaoService.cartao).then(r => {
        this.openSnack('Cartão gravado');
      }, reason =>  this.openSnack('erro: ' + reason));
      this.limparCartao();
    }
  }
  limparCartao() {
    this.cartaoService.cartao = {} as Cartao;
    this.cartaoService.cartaoBefore = {} as Cartao;
  }

  openSnack(mensagem: string) {
    this.snackBar.open(mensagem, '', {
      duration: 3000
    });
  }
  ngOnInit() {}
}
