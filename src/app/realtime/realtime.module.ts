import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealtimeComponent } from './realtime.component';
import { MatFormControlsModule } from '@material/mat-form-controls.module';
import { FormsModule } from '@angular/forms';
import { MatNavigationModule } from '@material/mat-navigation.module';
import { MatLayoutModule } from '@material/mat-layout.module';
import { MatButtonsIndicatorsModule } from '@material/mat-buttons-indicators.module';
import { MatPopupsModalsModule } from '@material/mat-popups-modals.module';
import { CartaoModule } from './cartao/cartao.module';

@NgModule({
  imports: [CommonModule,

    CartaoModule

  ],
  declarations: [RealtimeComponent],
  exports: [RealtimeComponent]
})
export class RealtimeModule {}
