import { Injectable } from '@angular/core';
import { CartaoRealtimeService } from '@services/cartao/cartao-realtime.service';
import { Cartao } from '../../interfaces/cartao';

@Injectable()
export class CartaoService {
  cartao = {} as Cartao;
  cartaoBefore = {} as any;

  constructor(public realtime: CartaoRealtimeService) {}
}
