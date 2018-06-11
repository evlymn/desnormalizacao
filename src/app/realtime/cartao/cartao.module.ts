import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaoComponent } from './cartao.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartaoComponent],
  exports: [CartaoComponent]
})
export class CartaoModule { }
