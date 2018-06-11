import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatSnackBarModule, MatTooltipModule],
  declarations: [],
  exports: [MatDialogModule, MatSnackBarModule, MatTooltipModule]
})
export class MatPopupsModalsModule {}
