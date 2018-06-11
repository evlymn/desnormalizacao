import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealtimeComponent } from './realtime.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RealtimeComponent],
  exports: [RealtimeComponent]
})
export class RealtimeModule {}
