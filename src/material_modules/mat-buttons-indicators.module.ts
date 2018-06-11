import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  declarations: [],
  exports: [MatButtonModule, MatButtonToggleModule, MatChipsModule, MatProgressSpinnerModule, MatProgressBarModule]
})
export class MatButtonsIndicatorsModule {}
