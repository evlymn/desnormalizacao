import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealtimeComponent } from './realtime.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RealtimeComponent, CadastroComponent],
  exports: [RealtimeComponent]
})
export class RealtimeModule {}
