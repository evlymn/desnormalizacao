import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaoComponent } from './cartao.component';
import { CartaoFormComponent } from './cartao-form/cartao-form.component';
import { CartaoListComponent } from './cartao-list/cartao-list.component';
import { MatFormControlsModule } from '@material/mat-form-controls.module';
import { FormsModule } from '@angular/forms';
import { MatNavigationModule } from '@material/mat-navigation.module';
import { MatLayoutModule } from '@material/mat-layout.module';
import { MatButtonsIndicatorsModule } from '@material/mat-buttons-indicators.module';
import { MatPopupsModalsModule } from '@material/mat-popups-modals.module';

@NgModule({
  imports: [
    CommonModule,
    MatFormControlsModule,
    MatNavigationModule,
    MatLayoutModule,
    MatButtonsIndicatorsModule,
    FormsModule,
    MatPopupsModalsModule,
    FormsModule,
  ],
  declarations: [CartaoComponent, CartaoFormComponent, CartaoListComponent],
  exports: [CartaoComponent]
})
export class CartaoModule { }
