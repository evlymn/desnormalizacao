import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaoComponent } from './cartao.component';
import { CartaoFormComponent } from './cartao-form/cartao-form.component';
import { CartaoListComponent } from './cartao-list/cartao-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartaoComponent, CartaoFormComponent, CartaoListComponent],
  exports: [CartaoComponent]
})
export class CartaoModule { }
