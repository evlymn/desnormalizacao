import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealtimeComponent } from './realtime.component';
import { MatFormControlsModule } from 'src/material_modules/mat-form-controls.module';
import { FormsModule } from '@angular/forms';
import { MatNavigationModule } from 'src/material_modules/mat-navigation.module';
import { MatLayoutModule } from 'src/material_modules/mat-layout.module';
import { MatButtonsIndicatorsModule } from 'src/material_modules/mat-buttons-indicators.module';
import { MatPopupsModalsModule } from 'src/material_modules/mat-popups-modals.module';

@NgModule({
  imports: [CommonModule,
    MatFormControlsModule,
    MatNavigationModule,
    MatLayoutModule,
    MatButtonsIndicatorsModule,
    MatPopupsModalsModule,
    FormsModule,

  ],
  declarations: [RealtimeComponent],
  exports: [RealtimeComponent]
})
export class RealtimeModule {}
